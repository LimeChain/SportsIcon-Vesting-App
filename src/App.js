import './App.css';
import Header from './components/Header/Header';
import { GlobalProvider } from "./context/GlobalContext"

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header></Header>
      </div>
    </GlobalProvider>
  );
}

export default App;
