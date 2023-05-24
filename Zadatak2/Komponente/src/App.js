import './App.css';

import WelcomeClass from './WelcomeClass';
import WelcomeFunction from './WelcomeFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Komponente</h1>
        <WelcomeClass />
        <WelcomeFunction />
      </header>
    </div>
  );
}

export default App;
