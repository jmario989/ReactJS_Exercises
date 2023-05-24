import React from "react";
import { UserFunction, UserClass, UserChildren } from "./components";

class App extends React.Component{

  users = [
    { name: "Ivo", years: 30 },
    { name: "Pero", years: 20 },
    { name: "Ana", years: 24 },
    { name: "Marina", years: 34 }
  ];

  render(){
    return (
      <div>
        <h1>React aplikacija</h1>
        <UserFunction name={this.users[0].name} years={this.users[0].years} />
        <UserFunction name={this.users[1].name} years={this.users[1].years} />
        <UserClass name={this.users[2].name} years={this.users[2].years} />
        <UserChildren name={this.users[3].name} years={this.users[3].years}>
          <strong>A hobi mi je plivanje.</strong>
        </UserChildren>
      </div>
    );
  }

}

export default App;