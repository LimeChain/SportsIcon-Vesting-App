import { Fragment } from 'react';
import Header from './components/Header/Header';
import { GlobalProvider } from "./context/GlobalContext"
import ClaimForm from './views/ClaimForm/ClaimForm';

function App() {
  return (
    <GlobalProvider>
      <Fragment>
        <Header></Header>
        <ClaimForm />
      </Fragment>
    </GlobalProvider>
  );
}

export default App;
