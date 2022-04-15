import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Home/>} />
      {/* <Route path="/:id" element={<ModaleChar/>} /> */}

      </Routes>
      </div>
  );
}

export default App;
