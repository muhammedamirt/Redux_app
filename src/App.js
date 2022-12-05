import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Product } from './components/Products/Product';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Product />
      </Fragment>
    </div>
  );
}

export default App;
