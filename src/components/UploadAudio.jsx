import React from 'react';

// reactstrap components
import {
  Card,
  CardBody
} from "reactstrap";
import Dropzone from 'react-dropzone';

const UploadAudio = () => {
  const getUploadParams = () => {
    return { url: 'https://httpbin.org/post' }
  }

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta)
  }

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }
  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    >
      {({ getRootProps, getInputProps }) => (
      <Card className="shadow  mt-5 " {...getRootProps()} >
        <input {...getInputProps()} />
      <CardBody style={{cursor:"pointer"}}>
        <div className="d-flex flex-column px-3 justify-content-center align-items-center" style={{ minHeight: "230px" }}>
          <div className='pb-3'>
            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
              <i className="fa fa-cloud-upload" />
            </div>
          </div>
          <div className="text-center">
            <h5 className="title">
              Upload Audio File
              </h5>
              <p>Supported Formats: WAV, MP3, M4A, CAF, AIFF, AVI, RMVB, FLV, MP4, MOV, WMV</p>
          </div>
        </div>
      </CardBody>
    </Card>
        )}
    </Dropzone>
  )
}

export default UploadAudio