import './App.css';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './services/connectFunctions';

import NewComponentClass from "./components/NewComponentClass";
import NewComponentFunction from './components/NewComponentFunction';

function App({ count, addOne, subtractOne, reset }) {
  return (
    <div className="App">
     <p>
      <span>
        <button onClick={subtractOne}> - </button>
        <span>Broj: {count}</span>
        <button onClick={addOne}> + </button>
      </span>
     </p>
     <p>
      <button onClick={reset}>Resetiraj broj</button>
     </p>
     <hr />
     <NewComponentClass />
     <hr />
     <NewComponentFunction />
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
