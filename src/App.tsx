import './App.css';
import { AboutSection } from './components/AboutSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';

function App() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <AboutSection />
      </div>
    </>
  );
}

export default App;
