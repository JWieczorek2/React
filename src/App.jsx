import { useState, useRef } from 'react';
import barka from '/Sounds/barka.mp3';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const audioRef = useRef(null);
  const handlePlayAudio = () => {
    audioRef.current.play();
  };
  return (
    <>
      <div>
        <img src="/image/papież.gif" alt=""/>
      </div>

      <h1>Julia Wieczorek 114728</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <button onClick={handlePlayAudio}>Posłuchaj Papieża</button>
        </p>
        <audio ref={audioRef}>
          <source src={barka} type="audio/mp3" />
        </audio>
      </div>
    
    
    </>
  )
}

export default App
