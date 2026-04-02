import './App.css';
import { AboutSection } from './components/AboutSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Slider } from './components/Slider';

function App() {
  return (
    <>
      <div className="max-w-360 min-w-95 m-auto">
        <Header />
        <HeroSection />
        <AboutSection />
        <Slider />
      </div>
    </>
  );
}

export default App;
