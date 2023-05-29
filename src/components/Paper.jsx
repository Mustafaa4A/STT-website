import "../assets/css/paper.css";

const Paper = ({children}) => {
  return (
    <div class="paper">
      <div class="paper-content">
        <textarea autofocus>{children}</textarea>
      </div>
      <div class="paper-footer">
        <p>DOWNLOAD</p>
        <p>COPY</p>
        <p>CLEAR</p>
      </div>
    </div>
  )
}

export default Paper;