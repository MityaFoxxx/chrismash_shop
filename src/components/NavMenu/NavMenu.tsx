import { NavLink } from 'react-router-dom';
import { useActiveSection, SECTIONS } from '../../hooks/useActiveSection';

export const NavMenu = () => {
  const { activeSection, scrollToSection, isGiftsPage } = useActiveSection();

  return (
    <nav className="items-center hidden gap-9 lg:flex ">
      <NavLink
        to="/gifts"
        className={`p-4 text-[12px] font-medium transition-colors rounded-xl hover:bg-pink-50 hover:text-red-700 ${
          isGiftsPage
            ? 'bg-pink-50 text-red-700'
            : 'text-gray-800'
        }`}
      >
        GIFTS
      </NavLink>
      {SECTIONS.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`p-4 text-[12px] font-medium transition-colors rounded-xl hover:bg-pink-50 hover:text-red-700 ${
            activeSection === section.id
              ? 'bg-pink-50 text-red-700'
              : 'text-gray-800'
          }`}
        >
          {section.name}
        </button>
      ))}
    </nav>
  );
};
