import './App.css';

/*
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
*/
import { Component1, Component2, Component3, Component4 } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Component1 />
       <Component2 />
       <Component3 />
       <Component4 />
      </header>
    </div>
  );
}

export default App;
