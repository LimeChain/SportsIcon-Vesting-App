import { Fragment } from 'react';
import Header from './components/Header/Header';
import { GlobalProvider } from "./context/GlobalContext"
import ClaimForm from './views/ClaimForm/ClaimForm';
import ConnectWindow from './views/ConnectWindow/ConnectWindow';

function App() {
  return (
    <GlobalProvider>
      <Fragment>
        <Header></Header>
        <ConnectWindow />
        <ClaimForm />
      </Fragment>
    </GlobalProvider>
  );
}

export default App;
