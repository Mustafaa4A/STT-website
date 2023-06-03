import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import 'react-toastify/dist/ReactToastify.css';

import HomePage from "views/HomePage";
import Transcribe from "views/Transcribe";
import TranscribeAudio from "views/TranscribeAudio";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/transcribe" element={<Transcribe />} />
      <Route path="/transcribe/audio" element={<TranscribeAudio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
);
