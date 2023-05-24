import './App.css';

import Main from './components/Main';

import { useState } from 'react';
import { Provider } from './context/Context';

function App() {
  const [color, setColor] = useState("#0000FF");
  const [font, setFont] = useState("Arial");

  const handleColorChange = event => {
    setColor(event.target.value);
  }

  const handleFontChange = event => {
    setFont(event.target.value);
  }

  return (
    <Provider value={{ color, font }}>
      <div>
        <Main />
        <hr />
        <label htmlFor="color">Odaberite boju: </label>
        <input type="color" id="color" value={color} onChange={handleColorChange} />
        <br /><br />
        <label htmlFor="font">Odaberite obitelj fonta: </label>
        <select id="font" onChange={handleFontChange}>
          <option>Arial</option>
          <option>Courier New</option>
          <option>Verdana</option>
          <option>Georgia</option>
        </select>
      </div>
    </Provider>
  );
}

export default App;
