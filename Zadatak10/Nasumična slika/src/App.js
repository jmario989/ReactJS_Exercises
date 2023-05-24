import './App.css';

import getAvatar from './services/getAvatar';

function App() {

  const backgroundImage = getAvatar();

  return (
    <div className="App">
      <header className="App-header">
          <span style={{ display: "inline-block", width: "100px", height: "100px", background: backgroundImage + " no-repeat center/contain" }} ></span>
      </header>
    </div>
  );
}

export default App;
