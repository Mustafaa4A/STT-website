import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';


// reactstrap components
import {
  Button,
  Row,
  Col
} from "reactstrap";
import Footer from 'components/Footer';
import Paper from 'components/Paper';
import { AudioPlayerControlSprite, Audio } from 'react-audio-player-pro';
import  'react-audio-player-pro/dist/style.css';
import { useLocation, useNavigate } from "react-router-dom"
import { transcribeAudio } from 'api/transcribe';
import { toast } from 'react-toastify';


const TranscribeAudio = () => {
  const navigate = useNavigate();
  let { state: audio } = useLocation()
  const [blob, setBlob] = useState();
  const text = useRef(null);
  const [output, setOutput] = useState(null);

  const  formatBytes = (bytes)=> {
    if (bytes < 1024) {
      return bytes + ' bytes';
    } else if (bytes < 1048576) {
      return (bytes / 1024).toFixed(2) + ' KB';
    } else if (bytes < 1073741824) {
      return (bytes / 1048576).toFixed(2) + ' MB';
    } else {
      return (bytes / 1073741824).toFixed(2) + ' GB';
    }
  }

  
  const convertAudio = async () => {
    if (audio) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(audio);
      reader.onloadend = () => {
        const buffer = new Uint8Array(reader.result);
        const audioBlob = new Blob([buffer], { type: 'audio/wav' });
        const audioURL = window.URL.createObjectURL(audioBlob);
        setBlob(audioURL)
      };
    }
  }
  
  useEffect(() => {
    document.title = audio.name;
    if (!audio) {
      navigate("/transcribe");
    }
    convertAudio();

  },[audio]);

  const goBack = () => {
    audio = undefined;
    navigate("/transcribe");
  }

  const transcribe = () => {
    // text.current.value = "I'm here to help you";
    // console.log(text.current)
    transcribeAudio(audio)
      .then(response => {
        setOutput(response.data)
      })
      .catch(error => {
        toast.error(error.message);
    });
  }

  return (
    <>
      <Navigation />
      <main >
        <section className="section section-lg section-shaped" >
          <div className="shape shape-style-4 shape-default"/>
          <Row className="mb-sm-4">
            <Col md="1" sm="10"></Col>
              <Col md="4" sm="10" xs="10" className="bg-white m-auto">
              <div className='d-flex flex-column justify-content-center' style={{minHeight:"70vh"}}>
                <h3 class="my-4 text-center text-uppercase">Speech to Text</h3>
                <div>
                  <h6 className="font-weight-bold border-bottom pb-2">Audio Information</h6>
                  <div className="pl-3">
                    <p><b>Audio Name: </b>{audio?.name}</p>
                    <p><b>Audio Type:</b> {audio?.type}</p>
                    <p><b>Audio Size:</b> { formatBytes(audio?.size)}</p>
                  </div>
                  <div className="my-4 mx-2">
                    <AudioPlayerControlSprite />
                    <Audio
                      src={blob}
                      preload="auto"
                      duration={100}
                      downloadFileName="stt-somali.mp3"
                      useRepeatButton={true}
                    />
                  </div>
                  <div className='d-flex justify-content-center'>
                  <Button className="btn-outline-danger" onClick={goBack}>Discard</Button>
                    <Button color="primary" className="w-45" onClick={transcribe}>Transcribe</Button>
                   </div>
                </div>
              </div>
              </Col>
              <Col md="7" sm="12" className="mt-4">
              <Paper>{output && output}</Paper>
              </Col>
            </Row>
          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TranscribeAudio;