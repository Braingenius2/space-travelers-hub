import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Rockets from './components/rockets';
import Missions from './components/missions';
import MyProfile from './components/myProfile';
import Dragons from './components/dragons';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route index path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/dragons" element={<Dragons />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
