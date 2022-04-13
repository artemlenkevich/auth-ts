import { Route, Routes } from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { NewsPage } from './pages/NewsPage';
import { ProfilePage } from './pages/ProfilePage';
import { Layout } from './components/Layout';
import { LoginPage } from "./pages/LoginPage";
import { NotFound } from "./pages/NotFound";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { setAuthData } from "./redux/authSlice";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let userId = localStorage.getItem('id');
    if (userId) dispatch(setAuthData(+userId))
  })

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