import { routes } from '@/router'
import { NavLink } from 'react-router'

function MainMenu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {routes[0].children.map((r, index) => (
          <li key={index} className="menu__item">
            <NavLink
              to={r.path ?? ""}
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
            >
              {r.handler?.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu
