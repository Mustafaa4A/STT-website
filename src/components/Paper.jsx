import "../assets/css/paper.css";

const Paper = ({children}) => {
  return (
    <div class="paper">
      <div class="paper-content">
        <textarea autofocus>{ children }</textarea>
      </div>
    </div>
  )
}

export default Paper;