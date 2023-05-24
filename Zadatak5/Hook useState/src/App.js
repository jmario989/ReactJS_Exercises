// uvoz modula (hook funkcije) useState - omogućuje davanje stanja funkcijskoj komponenti
import { useState } from "react";

import User from "./User";
import UserChildren from "./UserChildren";

function App() {

  const [users, setUsers] = useState([
    { name: "Pero", years: 30 },
    { name: "Tomo", years: 20 },
    { name: "Ana", years: 42 },
    { name: "Dario", years: 18 }
  ]);

  const [hobby, setHobby] = useState("A hobi mi je plivanje");

  const promijeniHobi = () => {
    setHobby("A hobi mi je trčanje");
  }

  /*
  const promijeniKorisnika = () => {
    setUsers([
      { name: "Ivo", years: 29 },
      { name: "Tomo", years: 20 },
      { name: "Ana", years: 42 },
      { name: "Dario", years: 18 }
    ]);
  }
  */

  const promijeniKorisnika = () => {
    const arr = [...users];
    arr[0] = { name: "Ivo", years: 29 };
    setUsers(arr);
  }

  /*
  const uvecajGodinu = () => {
    const arr = users.map(el => {
      return { name: el.name, years: el.years + 1 };
    });
    setUsers(arr);
  }
  */

  const uvecajGodinu = () => {
    setUsers(prevState => {
      return prevState.map(el => {
        return { name: el.name, years: el.years + 1 };
      });
    });
  }

  return (
    <div>
      <h1>React aplikacija</h1>
      <User name={users[0].name} years={users[0].years} />
      <User name={users[1].name} years={users[1].years} />
      <User name={users[2].name} years={users[2].years} />
      <UserChildren name={users[3].name} years={users[3].years}>
          <strong>{hobby}</strong>
      </UserChildren>
      <button type="button" onClick={promijeniHobi}>Promijeni hobi</button>
      <button type="button" onClick={promijeniKorisnika}>Promijeni korisnika</button>
      <button type="button" onClick={uvecajGodinu}>Uvećaj godinu</button>
    </div>
  );
}

export default App;
