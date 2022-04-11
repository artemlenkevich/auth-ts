import { Route, Routes } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { ProfilePage } from './pages/ProfilePage';
import { Layout } from './components/Layout';
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path='news' element={<NewsPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='login' element={<LoginPage />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;