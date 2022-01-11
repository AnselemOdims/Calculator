import { NavLink } from 'react-router-dom';
import { FcCalculator } from 'react-icons/fc';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calc',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  return (
    <header>
      <div>
        <FcCalculator size="20px" style={{ marginRight: '8px' }} />
        <h3>Math-Magicians</h3>
      </div>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            className="link"
            style={({ isActive }) => ({
              color: isActive ? '#f4913f' : '#3b3b41',
              borderBottom: isActive ? 'solid 4px #f4913f' : '',
              paddingBottom: isActive ? '5px' : '3px',
              fontWeight: 550,
            })}
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
