import React from 'react';
import Navigation from '../components/Navigation';


// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";
import Footer from 'components/Footer';
import UploadAudio from 'components/UploadAudio';
import RecordAudio from 'components/RecordAudio';

const Transcribe = () => {
  return (
    <>
      <Navigation />
      <main >
        <section className="section section-lg section-shaped pb-250" style={{minHeight:"100vh"}}>
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex flex-column justify-content-center align-items-center">
                <div className="col px-0 mt-5 text-center">
                  <h1 className='text-white'>Online Audio to Text Converter</h1>
              <p className='text-white h6'>
                    Convert speech to text in a few clicks. 
                Your best online free transcription tool.
              </p>
            </div>
          </Container>
          <Container>
            <Row>
              <Col md="6" sm="12">
                <UploadAudio />
              </Col>
              <Col md="6" sm="12" >
                <RecordAudio />
              </Col>
            </Row>
          </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
      </main>
      <Footer />
    </>
  )
}

export default Transcribe