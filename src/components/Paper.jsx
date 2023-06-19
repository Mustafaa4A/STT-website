import { UncontrolledTooltip } from "reactstrap";
import "../assets/css/paper.css";

const Paper = ({ children, clear }) => {

  const downloadAsWord = (content) => {
    if (content) {
      const blob = new Blob([content], { type: 'application/msword' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'document.doc';
      link.click();
    }
  }

  return (
    <div className="paper">
      <div className="paper-content">
        <textarea autofocus value={children}></textarea>
      </div>
      <div className="paper-footer">
        <div onClick={() => downloadAsWord(children)} id="toolt00">
          <p>DOWNLOAD</p>
        </div>
        <UncontrolledTooltip delay={0} target="toolt00">
          DOWNLOAD AS WORD    
        </UncontrolledTooltip>
        <div onClick={() => navigator.clipboard.writeText(children)}  id="toolkit90">
          <p>COPY</p>
        </div>
        <UncontrolledTooltip delay={0} target="toolkit90">
            COPY TO CLIPBOARD
        </UncontrolledTooltip>
        
        <div onClick={clear} id="toolkit99">
          <p>CLEAR</p>
        </div>
        <UncontrolledTooltip delay={0} target="toolkit99">
            CLEAR THE OUTPUT
        </UncontrolledTooltip>
      </div>
    </div>
  )
}

export default Paper;