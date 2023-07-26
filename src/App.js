import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navBar';
import './App.css';
import Missions from './components/missions';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
