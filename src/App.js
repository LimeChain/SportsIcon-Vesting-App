import { Fragment } from 'react';
import { GlobalProvider } from "./context/GlobalContext"
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <GlobalProvider>
      <Fragment>
        <Header/>
        <Home/>
        <Footer/>
      </Fragment>
    </GlobalProvider>
  );
}

export default App;
