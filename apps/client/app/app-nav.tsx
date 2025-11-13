import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about" end>
        About
      </NavLink>
      <NavLink to="/profile" end>
        Profile
      </NavLink>
      <NavLink to="/posts" end>
        Posts
      </NavLink>
    </nav>
  );
}
