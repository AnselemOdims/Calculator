import { NavLink } from 'react-router-dom';

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
        <h3>Math-Magicians</h3>
      </div>
      <nav>
        { links.map((link) => (
          <NavLink key={link.id} to={link.path}>{link.text}</NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
