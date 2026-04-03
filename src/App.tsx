import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { MainPage } from './pages/MainPage';
import { GiftsPage } from './pages/GiftsPage';
import './App.css';

function App() {
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
