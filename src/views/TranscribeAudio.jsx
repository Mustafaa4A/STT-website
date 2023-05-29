import React from 'react';
import Navigation from '../components/Navigation';


// reactstrap components
import {
  Card,
  CardBody,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import Footer from 'components/Footer';
import Paper from 'components/Paper';

const TranscribeAudio = () => {
  return (
    <>
      <Navigation />
      <main >
        <section className="section section-lg section-shaped" >
          <div className="shape shape-style-4 shape-default"/>
          <Row className="">
            <Col md="1" sm="10"></Col>
              <Col md="4" sm="12" className="bg-white">
              <div className='d-flex flex-column justify-content-center' style={{minHeight:"70vh"}}>
                <h3 class="my-3 text-center">Transcribe Audio File</h3>
                <div>
                  <h6 className="font-weight-bold border-bottom pb-2">Audio Information</h6>
                  <div className="pl-3">
                    <p><b>Audio Name: </b>sample.mp3</p>
                    <p><b>Audio Type:</b> audio/mp3</p>
                    <p><b>Audio Size:</b> 3 Seconds</p>
                  </div>
                  <div className="bg-success my-3" style={{height:"50px", width:"100%"}}>
                 
                  </div>
                   <Button color="primary" className="w-45">Discard</Button>
                  <Button color="info" className="w-45">Discard</Button>
                </div>
              </div>
              </Col>
              <Col md="7" sm="12">
                <Paper></Paper>
              </Col>
            </Row>
          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TranscribeAudio;