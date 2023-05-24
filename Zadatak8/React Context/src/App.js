import Component1 from "./components/Component1";

import { useState } from "react";
import { Provider } from "./context/Context";

function App() {
  const [number, setNumber] = useState(0);

  const handleChange = event => {
    setNumber(event.target.value);
  }

  return (
    <Provider value={{ text: "Neki tekst", number }}>
      <div>
        <label>Postavi u kontekst:</label>
        <input type="number" onChange={handleChange} value={number} />
        <Component1 />
      </div>
    </Provider>
  );
}

export default App;
