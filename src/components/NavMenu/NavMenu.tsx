import { NavLink } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <nav className="items-center hidden gap-9 lg:flex ">
      <NavLink
        to="/gifts"
        className="p-4 text-[12px] font-medium text-gray-800 transition-colors rounded-xl hover:bg-pink-50 hover:text-red-700"
      >
        GIFTS
      </NavLink>
      <a
        href="/#about-section"
        className="p-4 text-[12px] font-medium text-gray-800 transition-colors rounded-xl hover:bg-pink-50 hover:text-red-700"
      >
        ABOUT
      </a>
      <a
        href="/#best_section"
        className="p-4 text-[12px] font-medium text-gray-800 transition-colors rounded-xl hover:bg-pink-50 hover:text-red-700"
      >
        BEST
      </a>
      <a
        href="/#contacts-section"
        className="p-4 text-[12px] font-medium text-gray-800 transition-colors rounded-xl hover:bg-pink-50 hover:text-red-700"
      >
        CONTACTS
      </a>
    </nav>
  );
};
