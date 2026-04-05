import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainLayout = () => {
  return (
    <div className="max-w-360 min-w-95 mx-auto relative">
      <Header />
      <main className="bg-red-500" data-aos="fade-up" data-aos-duration="800" role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
