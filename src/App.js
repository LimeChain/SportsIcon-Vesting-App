import {Fragment} from 'react';
import Header from './components/Header/Header';
import { GlobalProvider } from "./context/GlobalContext"
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Fragment>
        <Header></Header>
      </Fragment>
    </GlobalProvider>
  );
}

export default App;
