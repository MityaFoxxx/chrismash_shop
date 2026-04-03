import { useEffect } from 'react';
import { HeroSection } from '../../components/HeroSection';
import { AboutSection } from '../../components/AboutSection';
import { Slider } from '../../components/Slider';
import { BestGiftSection } from '../../components/BestGiftSection';
import { CTASection } from '../../components/CTASection';

export const MainPage = () => {
  useEffect(() => {
    // Проверяем есть ли хеш в URL при загрузке компонента
    const hash = window.location.hash.slice(1); // Убираем #
    if (hash) {
      // Ждем небольшую задержку чтобы DOM успел загрузиться
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Slider />
      <BestGiftSection />
      <CTASection />
    </>
  );
};
