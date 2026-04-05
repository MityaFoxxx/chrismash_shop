import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Оптимизированный хук для инициализации AOS анимаций
 * Улучшает производительность и избегает повторной инициализации
 */
export const useAOS = () => {
  useEffect(() => {
    // Проверяем, что AOS еще не инициализирован
    if (typeof window !== 'undefined' && !window.AOS) {
      AOS.init({
        duration: 800, // slightly longer for smoother animations
        once: true, // анимация только один раз
        offset: 100, // расстояние до элемента перед анимацией
        delay: 0, // задержка перед анимацией
        easing: 'ease-in-out', // плавная анимация
        mirror: false, // не повторять при скролле вверх
        anchorPlacement: 'top-bottom', // позиция якоря
      });
      
      // Добавляем AOS в window для проверки инициализации
      window.AOS = AOS;
    }

    // Обновляем AOS при изменении размера окна
    const handleResize = () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    };

    window.addEventListener('resize', handleResize);

    // Очистка при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей для однократной инициализации
};

// Добавляем тип для window.AOS
declare global {
  interface Window {
    AOS?: any;
  }
}
