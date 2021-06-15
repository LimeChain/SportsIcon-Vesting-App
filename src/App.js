import {Fragment} from 'react';
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
