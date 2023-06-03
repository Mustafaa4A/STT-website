import { useRef } from "react";
import "../assets/css/paper.css";

const Paper = ({ children }) => {
  return (
    <div className="paper">
      <div className="paper-content">
        <textarea autofocus value={children}></textarea>
      </div>
      <div className="paper-footer">
        <p>DOWNLOAD</p>
        <p>COPY</p>
        <p>CLEAR</p>
      </div>
    </div>
  )
}

export default Paper;