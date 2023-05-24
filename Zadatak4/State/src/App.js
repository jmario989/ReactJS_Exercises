import React from "react";
import { UserFunction, UserClass, UserChildren } from "./components";

class App extends React.Component{

  state = {
    users: [
      { name: "Ivo", years: 30 },
      { name: "Pero", years: 36 },
      { name: "Ana", years: 21 },
      { name: "Tomo", years: 55 }
    ],
    hobby: "A hobi mi je plivanje"
  };

  promijeniHobi = () => {
    this.setState({ hobby: "A hobi mi je trčanje" });
  }

  /*
  promijeniKorisnika = () => {
    this.setState({ users: [
      { name: "Dario", years: 29 },
      { name: "Pero", years: 36 },
      { name: "Ana", years: 21 },
      { name: "Tomo", years: 55 }
    ] });
  }
  */

  promijeniKorisnika = () => {
    const arr = [...this.state.users];
    arr[0] = { name: "Dario", years: 29 };
    this.setState({ users: arr });
  }

  uvecajGodinu = () => {
    this.setState(prevState => {
      const arr = prevState.users.map(el => {
        return { name: el.name, years: el.years + 1 }
      });
      return { users: arr };
    });
  }

  render(){
    // const { users } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        {/* <UserFunction name={users[0].name} years={users[0].years} /> */}
        <UserFunction name={this.state.users[0].name} years={this.state.users[0].years} />
        <UserFunction name={this.state.users[1].name} years={this.state.users[1].years} />
        <UserClass name={this.state.users[2].name} years={this.state.users[2].years} />
        <UserChildren name={this.state.users[3].name} years={this.state.users[3].years}>
            <strong>{ this.state.hobby }</strong>
        </UserChildren>
        <button type="button" onClick={this.promijeniHobi} >Promijeni hobi</button>
        <button type="button" onClick={this.promijeniKorisnika}>Promijeni korisnika</button>
        <button type="button" onClick={this.uvecajGodinu}>Uvećaj godinu</button>
      </div>
    );
  }

}

export default App;