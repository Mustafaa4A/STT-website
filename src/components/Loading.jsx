import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';

const percentage = 55;

const Loading = () => {
  const page = {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:'rgba(0,0,0,0.3)'
    
  }
  

  return (
    <div style={page}>
      <div style={{ width: '200px', height: '200px' }}>
        <ChangingProgressProvider values={Array.from({length: 100}, (_, i) => i + 1)}>
        {percentage => (
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              strokeWidth={2}
              styles={buildStyles({
                  textColor: "white",
                  pathColor: "red",
                })}
            />
        )}
      </ChangingProgressProvider>
        </div>
    </div>
  )
}

export default Loading;