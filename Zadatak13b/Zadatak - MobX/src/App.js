import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AllBooks from "./containers/AllBooks";
import AuthorBooks from "./containers/AuthorBooks";
import Contact from "./components/Contact";

import { Provider } from "mobx-react";
import RootStore from "./store/RootStore";

const rootStore = new RootStore();

function App() {
  return (
    <Provider rootStore={rootStore}>
      <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Početna</Link>
            </li>
            <li>
              <Link to="/author-books/">Knjige odabranog autora</Link>
            </li>
            <li>
              <Link to="/contact/">Kontakt</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/author-books/" element={<AuthorBooks />} />
          <Route path="/contact/" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
  );
}

export default App;