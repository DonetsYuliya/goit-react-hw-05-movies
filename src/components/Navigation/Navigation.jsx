import { NavLink } from 'react-router-dom';

import css from './navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.menu}>
        <li>
          <NavLink className={css.link} to={'/'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to={'/movies'}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
