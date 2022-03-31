import './App.scss';
import { Navbar } from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App;
