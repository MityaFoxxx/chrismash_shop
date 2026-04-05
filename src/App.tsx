import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { MainPage } from './pages/MainPage';
import { GiftsPage } from './pages/GiftsPage';
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="gifts" element={<GiftsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
