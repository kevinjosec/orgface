import './App.css';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registerwphone from './components/registerwphone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/regwphone" element={<Registerwphone/>} />
      </Routes>
    </Router>
  );
}

export default App;
