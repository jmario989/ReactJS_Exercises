import './App.css';

import { useState } from 'react';
import Clock from './Clock';

function App() {
  const [show, setShow] = useState(true);

  var rukujPrikazom = () => {
    setShow(show ? false : true);
  }

  var content = show ? <Clock /> : "";

  return (
    <div className="App">
      <div>
        <button onClick={rukujPrikazom}>{show ? "Sakrij sat" : "Prikaži sat"}</button>
      </div>
      {content}
    </div>
  );
}

export default App;
