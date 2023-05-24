import './App.css';

import Greeting1 from './components/Greeting1';
import Greeting2 from './components/Greeting2';
import Greeting3 from './components/Greeting3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Conditional rendering (uvjetno iscrtavanje)</h1>
        <Greeting1 />
        <Greeting2 />
        <Greeting3 />
      </header>
    </div>
  );
}

export default App;
