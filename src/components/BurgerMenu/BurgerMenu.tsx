import { useEffect } from 'react';

interface BurgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({ isMenuOpen, toggleMenu }: BurgerMenuProps) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden relative">
      <button
        className="flex flex-col gap-1.5 p-2 relative z-20"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`
              w-6 h-0.5 bg-gray-800 rounded-full 
              transition-all duration-300 origin-center transform
              ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}
            `}
        />

        <span
          className={`
              w-6 h-0.5 bg-gray-800 rounded-full 
              transition-all duration-300 origin-center transform
              ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}
            `}
        />
      </button>
      <div
        className={`
          fixed inset-0 transition-all duration-300 z-30
          ${
            isMenuOpen
              ? 'opacity-100 visible pointer-events-auto'
              : 'opacity-0 invisible pointer-events-none'
          }
        `}
        onClick={toggleMenu}
      />

      <div
        className={`
          
          mt-16
          fixed top-0 right-0 bottom-0 w-full 
          transform transition-transform duration-300 ease-out z-100
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Навигационное меню */}
        <nav className="flex flex-col items-center justify-center h-full gap-8 bg-white relative z-101">
          <a
            href="#"
            className="text-2xl font-semibold tracking-widest text-gray-800 transition-colors hover:text-blue-600"
          >
            GIFTS
          </a>
          <a
            href="#"
            className="text-2xl font-semibold tracking-widest text-gray-800 transition-colors border-b border-gray-100 hover:text-blue-600"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-2xl font-semibold tracking-widest text-gray-800 transition-colors border-b border-gray-100 hover:text-blue-600"
          >
            BEST
          </a>
          <a
            href="#"
            className="text-2xl font-semibold tracking-widest text-gray-800 transition-colors border-b border-gray-100 hover:text-blue-600"
          >
            CONTACTS
          </a>
        </nav>
      </div>
    </div>
  );
};
