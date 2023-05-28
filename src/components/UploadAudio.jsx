import React, { useState } from 'react';

// reactstrap components
import {
  Card,
  CardBody
} from "reactstrap";
import { useDropzone } from 'react-dropzone';

const UploadAudio = () => {
   const { getRootProps, getInputProps } = useDropzone({
     accept: {
      'audio/*':['.wav', '.mp3', '.mp4', '.caf', '.afif', '.avi']
    },
    onDrop: (acceptedFiles) => {
      onDropFile(acceptedFiles[0])
    },
  });
  const [ file, setFile ] = useState(null);
  

  const onDropFile = (file) => {
    setFile(file)
    console.log(file)
  }

  return (
      <Card className="shadow  mt-5 " {...getRootProps()} >
        <input {...getInputProps()} accept='audio/wav' />
      <CardBody style={{cursor:"pointer"}}>
        <div className="d-flex flex-column px-3 justify-content-center align-items-center" style={{ minHeight: "230px" }}>
          <div className='pb-3'>
            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                {
                  !file?
                  <i className="fa fa-cloud-upload" />
                  :
                  <i className="fa fa-edit" />
                }
            </div>
          </div>
          <div className="text-center">
            {
                  !file ? (
                    <>
                      <h5 className="title">Upload/Drag  Audio File</h5>
                      <p>Supported Formats: WAV, MP3,  CAF, AIFF, AVI</p>
                    </>
                  ) : (
                      <p>{file?.path}</p>
              )      
            }
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default UploadAudio