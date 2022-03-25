import './App.css';
import ScrollSnapPage from './components/ScrollSnapPage';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router>
      <ScrollSnapPage className="App"/>
    </Router>
  );

}

export default App;
