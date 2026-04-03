import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Список секций для отслеживания
export const SECTIONS = [
  { id: 'about-section', name: 'ABOUT' },
  { id: 'best_section', name: 'BEST' },
  { id: 'contacts-section', name: 'CONTACTS' }
];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Отслеживаем активную секцию на всех страницах
    // Функция для обработки скролла
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Увеличим смещение для более точного определения
      let foundSection = '';

      // Отслеживаем contacts-section на всех страницах
      if (location.pathname === '/') {
        // На главной отслеживаем все секции
        for (const section of SECTIONS) {
          const element = document.getElementById(section.id);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            
            // Проверяем если секция в видимой области
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              foundSection = section.id;
              break;
            }
          }
        }

        // Дополнительная проверка для секции в самом верху страницы
        if (scrollPosition < 200) {
          foundSection = '';
        }
      } else {
        // На других страницах отслеживаем только contacts-section (Footer)
        // Но только если пользователь действительно прокрутил к футеру
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollBottom = window.scrollY + windowHeight;
        
        // Проверяем если страница достаточно длинная для скролла
        const isScrollable = documentHeight > windowHeight * 1.5;
        
        if (isScrollable) {
          const footerElement = document.getElementById('contacts-section');
          if (footerElement) {
            const { offsetTop, offsetHeight } = footerElement;
            
            // Отслеживаем футер только если пользователь прокрутил достаточно далеко
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              foundSection = 'contacts-section';
            }
          }

          // Особая проверка для Footer - если мы почти в конце страницы
          // Но только если пользователь действительно прокрутил
          if (scrollBottom >= documentHeight - 50 && window.scrollY > 100) {
            foundSection = 'contacts-section';
          }
        }
      }

      if (foundSection !== activeSection) {
        setActiveSection(foundSection);
      }
    };

    // Добавляем обработчик скролла
    window.addEventListener('scroll', handleScroll);
    
    // Вызываем сразу для установки начального состояния
    handleScroll();

    // Убираем обработчик при размонтировании
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeSection]);

  // Функция для навигации к секции с учетом текущей страницы
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contacts-section') {
      // Для contacts-section всегда прокручиваем к футеру на текущей странице
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setActiveSection(sectionId);
      }
    } else if (location.pathname === '/') {
      // Для других секций работаем только если на главной
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Для других секций ждем немного перед установкой
        setTimeout(() => {
          setActiveSection(sectionId);
        }, 300);
      }
    } else {
      // Если на другой странице и это не contacts-section, переходим на главную
      navigate(`/#${sectionId}`);
      
      // После перехода ждем немного и прокручиваем к секции
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Для других секций ждем немного перед установкой
          setTimeout(() => {
            setActiveSection(sectionId);
          }, 300);
        }
      }, 100);
    }
  };

  // Функция для проверки активной страницы
  const isGiftsPage = location.pathname === '/gifts';

  return { activeSection, scrollToSection, isGiftsPage };
};
