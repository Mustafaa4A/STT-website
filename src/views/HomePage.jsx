import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Main from 'components/Main';

// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import Footer from 'components/Footer';
import { UserContext } from 'context/user';
  
const HomePage = () => {
  // const { getUser:{user} } = useContext(UserContext);
  // console.log();
  return (
    <>
      <Navigation />
      <main >
        <Main />
        <section className="section section-md">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Your Online Voice to Text Software</h2>
                  <p className="lead text-muted">
                    Converting a voice file into a text file has never been so easy. Turn your voice to text online without overwhelming yourself with extra steps. With Podcastle, all you need to do is upload your audio file and let our smart technology do the rest. You can convert all popular voice formats, including MP3, WAV, and even MP4.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        <section className="section section-lg pt-lg-0">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" className="my-2 text-center">
                  <h3 className="display-3">How to Convert Voice to Text</h3>
                  <p className="lead text-muted">
                   PPPP offers a voice to text software that enables you to transcribe your spoken words with ease, requiring only a few steps.
                  </p>
                </Col>
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5 text-center">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-cloud-upload-96" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Upload audio file
                          </h6>
                          <p className="description mt-3">
                            Choose any of the acceptable voice formats and drag and drop your audio or video file into the PPP dashboard.
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5 text-center">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Transcribe your audio
                          </h6>
                          <p className="description mt-3">
                            Right-click on the audio track, choose Transcribe, and let our automatic transcription software convert your voice to text in no time. Once you get your voice-to-text transcription
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0" >
                        <CardBody className="py-5 text-center">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Export the file
                          </h6>
                          <p className="description mt-3">
                           It's done! Choose either PDF or DOCX format and download your transcription
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage