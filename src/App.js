import { GlobalProvider } from "./context/GlobalContext"
import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Routes from './Routes';

function App() {
  return (
    <GlobalProvider>
      <div className="app">
          <Router>
            <Header />
            <Routes />
            <Footer />
          </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
