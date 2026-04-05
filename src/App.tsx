import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { lazy, Suspense } from 'react';
import './App.css';
import { useAOS } from './hooks/useAOS';

// Ленивая загрузка страниц для code splitting
const MainPage = lazy(() => import('./pages/MainPage').then(module => ({ default: module.MainPage })));
const GiftsPage = lazy(() => import('./pages/GiftsPage').then(module => ({ default: module.GiftsPage })));

// Компонент-заглушка для Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-red-500">
    <div className="text-white text-xl font-semibold">Загрузка...</div>
  </div>
);


function App() {
  useAOS();
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <MainPage />
            </Suspense>
          } />
          <Route path="gifts" element={
            <Suspense fallback={<PageLoader />}>
              <GiftsPage />
            </Suspense>
          } />
        </Route>
      </Routes>
   
  );
}

export default App;
