import React, { useRef, useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Modal
} from "reactstrap";

const RecordAudio = () => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [meadia, setMedia] = useState(null);

  const toggleModal = () => {
    setCollapseOpen(!collapseOpen);
  };

  const { startRecording, stopRecording, pauseRecording, mediaBlobUrl, clearBlobUrl } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true,
    blobPropertyBag: { type: "audio/wav" },
    askPermissionOnMount: true
  });

  const audioRef = useRef();
  const [recording, setRecording] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startRecord = async () => {
    navigator.permissions.query({ name: 'microphone' }).then(({ state }) => {
      if (state === 'granted') {
        startRecording();
        setRecording(prev => !prev);
      }
    })
  };

  const stopRecord = () => {
    pauseRecording();
    stopRecording();
    setRecording(prev => !prev);
    console.log(mediaBlobUrl)
  };


  const playAudio = () => {
    setPlaying(true);
    audioRef.current.play();
  }

  const pauseAudio = () => {
    setPlaying(false);
    audioRef.current.pause();
  }

  const onEndAudio = () => {
    setPlaying(false);
  }

  const clear = () => {
    pauseAudio();
    clearBlobUrl();
  }

  return (
    <>
      <Card className="shadow  mt-5" role="tablist">
        
      <CardBody style={{cursor:"pointer"}} onClick={toggleModal}>
        <div className="d-flex flex-column justify-content-center  align-items-center" style={{ minHeight: "230px" }}>
          <div className='pb-3'>
            <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
              <i className="fa fa-microphone " />
            </div>
          </div>
          <div className="text-center" >
              <h5 className="title">
              Record Audio
          </h5>
          <p>Avoid noisy areas and consider using a microphone or headset if possible.</p>
          </div>
        </div>
      </CardBody>
      </Card>
      
       <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={collapseOpen}
      >
        <div className="position-absolute right-3 top-2" style={{ cursor: "pointer" }} onClick={() => {
          toggleModal(); clear();
        }}>
                <i className="fa fa-close " />
          </div>
        <Card className="shadow  mt-5" >
          
          <CardBody className="text-center">
            {recording && <p>Recording...</p>}
            <video src={mediaBlobUrl} ref={audioRef} onEnded={onEndAudio} hidden/>
            <div className="d-flex flex-column justify-content-center  align-items-center" style={{ minHeight: "200px" }}>
              {
                (!mediaBlobUrl) ? (
                !recording ?(
                <div className='pb-3' style={{cursor:"pointer"}} onClick={startRecord}>
                  <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                    <i className="fa fa-microphone" size={200} />
                  </div>
                </div>
                  ) : (
                    <div className='pb-3' style={{cursor:"pointer"}} onClick={stopRecord}>
                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                      <i className="fa fa-stop" size={200} />
                    </div>
                  </div>)
                ) : (
                    <div className='d-flex '>
                      <div className="icon icon-shape bg-gradient-danger rounded-circle text-white m-2" style={{cursor:"pointer"}} onClick={playing?pauseAudio:playAudio}>
                        {playing ? <i className="fa fa-stop" size={200} /> :
                          <i className="fa fa-play" size={200} />}
                      </div>
                      <div className="icon icon-shape bg-gradient-danger rounded-circle text-white m-2" style={{cursor:"pointer"}} onClick={clear}>
                      <i className="fa fa-undo" size={200} />
                  </div>
                    </div>
                )
              }
              <div className="text-center">
              </div>
            </div>
            <Button disabled={!mediaBlobUrl} color="primary" className="w-100" onClick={() => {
              console.log(mediaBlobUrl)
            }}>continue</Button>
          </CardBody>
      </Card>
      </Modal>
    </>
  )
}

export default RecordAudio