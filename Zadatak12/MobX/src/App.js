import './App.css';

import Add from './components/Add';
import GroceriesList from './components/GroceriesList';

import GroceryStore from './store/GroceryStore';
import { Provider } from 'mobx-react';

const groceryStore = new GroceryStore();

function App() {
  return (
    <Provider store={groceryStore} >
      <div className="App">
        <Add />
        <GroceriesList />
      </div>
    </Provider>
  );
}

export default App;
