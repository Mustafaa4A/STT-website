import React, { useState } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Modal
} from "reactstrap";

const RecordAudio = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleModal = () => {
    setCollapseOpen(!collapseOpen);
  };

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
          <div className="text-center">
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
        <div className="position-absolute right-3 top-2" style={{cursor:"pointer"}} onClick={toggleModal}>
                <i className="fa fa-close " />
          </div>
        <Card className="shadow  mt-5" >
          
          <CardBody className="text-center">
            <div className="d-flex flex-column justify-content-center  align-items-center" style={{ minHeight: "300px" }}>
              <div className='pb-3' style={{cursor:"pointer"}}>
                <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                  <i className="fa fa-microphone" size={200} />
                </div>
              </div>
              <div className="text-center">
              </div>
            </div>
          </CardBody>
      </Card>
      </Modal>
    </>
  )
}

export default RecordAudio