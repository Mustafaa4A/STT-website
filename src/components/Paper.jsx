import "../assets/css/paper.css";

const Paper = ({ children, clear }) => {

  const downloadAsWord=(content) =>{
    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.doc';
    link.click();
  }

  return (
    <div className="paper">
      <div className="paper-content">
        <textarea autofocus value={children}></textarea>
      </div>
      <div className="paper-footer">
        <p onClick={()=>downloadAsWord(children)}>DOWNLOAD</p>
        <p onClick={()=>navigator.clipboard.writeText(children)}>COPY</p>
        <p onClick={clear}>CLEAR</p>
      </div>
    </div>
  )
}

export default Paper;