import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Shop></Shop>
      </div>
    </Router>

  );
}

export default App;
