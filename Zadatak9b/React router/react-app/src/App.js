import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Pocetna, Adresa, Kontakt } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <nav>
          <ul>
            <li>
              <Link to="/">Početna</Link>
            </li>
            <li>
              <Link to="/adresa/">Adresa</Link>
            </li>
            <li>
              <Link to="/kontakt/">Kontakt</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/adresa/" element={<Adresa />} />
          <Route path="/kontakt/" element={<Kontakt />} />
          <Route path="*" element={
            <section>
              <h3>Ništa nije nađeno</h3>
            </section>
          } />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
