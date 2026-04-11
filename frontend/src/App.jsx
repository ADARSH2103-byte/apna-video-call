import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/Authentication';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/home' element={<HomeComponent />} />
        <Route path='/history' element={<History />} />
        <Route path='/:url' element={<VideoMeetComponent />} />
      </Routes>
    </div>
  );
}

export default App;