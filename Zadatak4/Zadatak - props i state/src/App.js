import './App.css';
import React from 'react';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component{

  state = {
    datum: new Date().toLocaleDateString(),
    naslov: "Učilište Algebra"
  }

  promijeniNaslov = () => {
    const txt = this.state.naslov === "Učilište Algebra" ? "Budi izvrstan u onom što voliš" : "Učilište Algebra";
    this.setState({ naslov: txt });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button type="button" onClick={this.promijeniNaslov}>{this.state.naslov === "Učilište Algebra" ? "Zašto Algebra" : "Mi smo ..."}</button>
          </div>
          <Header naslov={this.state.naslov} />
          <Main />
          <Footer datum={this.state.datum} />
        </header>
      </div>
    );
  }

}

export default App;

