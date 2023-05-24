import "./style.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import {Pocetna, Adresa, Kontakt} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Početna</NavLink>
              </li>
              <li>
                <NavLink to="/adresa/" className={({ isActive }) => isActive ? "active" : undefined}>Adresa</NavLink>
              </li>
              <li>
                <NavLink to="/kontakt/" className={({ isActive }) => isActive ? "active" : undefined}>Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        
        <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/adresa/" element={<Adresa />} />
            <Route path="/kontakt/" element={<Kontakt />} />
            <Route path="*" element={
              <section>
                <h3>Ništa nije nađeno.</h3>
              </section>
            } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
