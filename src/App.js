import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import Favourite from './Components/Pages/Favourite'

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/favourite" element={<Favourite/>} />

      </Routes>
      </div>
  );
}

export default App;
