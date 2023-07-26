import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import './App.css';
import Missions from './components/missions';
import Dragons from './components/dragons';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
