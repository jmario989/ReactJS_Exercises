import './App.css';

import Person from './Person';
import { sum } from './Utility';
import { num1, num2 } from './Utility';

import Prs from "./Person";
import { sum as zbroj } from "./Utility";
import * as ALL from "./Utility";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prvi primjer</h1>
        <p>Ime osobe: {Person.name}</p>
        <p>Prvi zbroj: {sum(5, 3)}</p>
        <p>Drugi zbroj: {sum(num1, num2)}</p>
        <h1>Drugi primjer</h1>
        <p>Ime osobe: {Prs.name}</p>
        <p>Prvi zbroj: {zbroj(5, 3)}</p>
        <p>Drugi zbroj: {ALL.sum(ALL.num1, ALL.num2)}</p>
      </header>
    </div>
  );
}

export default App;
