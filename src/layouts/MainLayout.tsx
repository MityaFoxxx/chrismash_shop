import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainLayout = () => {
  return (
    <div className="max-w-360 min-w-95 m-auto">
      <Header />
      <main className="bg-red-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
