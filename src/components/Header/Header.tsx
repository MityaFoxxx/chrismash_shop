import { useState, useCallback } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NavMenu } from '../NavMenu';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Оптимизированная функция для переключения меню
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <header className="max-w-360 min-w-95 mx-auto fixed top-0 left-0 right-0 z-150 flex items-center justify-between h-16 px-2 lg:px-21 bg-white shadow-sm" role="banner">
        <Link to="/" aria-label="На главную страницу Christmas Shop">
          <div className="flex items-center gap-3 px-5">
            <div>
              <img className="h-6" src="snowflake.svg" alt="Снежинка - логотип Christmas Shop" />
            </div>
            <h1 className="text-xs font-medium tracking-[5%]">THE GIFTS</h1>
          </div>
        </Link>

        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <NavMenu />
      </header>
    </>
  );
};
