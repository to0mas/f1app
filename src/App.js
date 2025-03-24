import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Home from './Component/HomePage/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
