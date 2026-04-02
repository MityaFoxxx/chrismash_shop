import { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { NavMenu } from '../NavMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-2 lg:px-21 bg-white shadow-sm">
        <div className="flex items-center gap-3 px-5">
          <div>
            <img className="h-6" src="snowflake.svg" alt="snowflake logo" />
          </div>
          <h1 className="text-xs font-medium tracking-[5%]">THE GIFTS</h1>
        </div>

        <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <NavMenu />
      </header>
    </>
  );
};
