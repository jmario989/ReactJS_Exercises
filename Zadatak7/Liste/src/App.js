import './App.css';

import React from 'react';
import User from './User';

class App extends React.Component{

  state = {
    users: [
      { id: 1, name: "Pero", years: 30 },
      { id: 2, name: "Ana", years: 20 },
      { id: 3, name: "Ivo", years: 35 },
      { id: 4, name: "Tomo", years: 24 },
      { id: 5, name: "Dario", years: 40 }
    ],
    // niz: [3, 12, 45, 2, 65, 76, 100]
  };

  uvecajGodinu = () => {
    this.setState(prevState => {
      const arr = prevState.users.map(el => {
        return { id: el.id, name: el.name, years: el.years + 1 };
      });
      return { users: arr }
    });
  }

  /*
  promijeniKorisnika = event => {
    const arr = [...this.state.users];
    arr[0].name = event.target.value;
    this.setState({ users: arr });
  }
  */

  promijeniKorisnika = (index, event) => {
    const arr = [...this.state.users];
    arr[index].name = event.target.value;
    this.setState({ users: arr });
  }

  render(){
    const { users } = this.state;

    return (
      <div className='App'>
        {/* <User name={users[0].name} years={users[0].years} onNameChange={this.promijeniKorisnika} />
        <User name={users[1].name} years={users[1].years} />
        <User name={users[2].name} years={users[2].years} />
        <User name={users[3].name} years={users[3].years} /> */}

        {/* <h3>Primjer liste</h3> */}
        {/* this.state.niz.map((el, index) => <div key={index}><p>{el}</p></div>) */}

        {users.map((user, index) => {
          return <User key={user.id} name={user.name} years={user.years} onNameChange={(ev) => this.promijeniKorisnika(index, ev)} />
        })}

        <button type="button" onClick={this.uvecajGodinu}>Uvećaj godinu</button>
      </div>
    );

  }

}

export default App;
