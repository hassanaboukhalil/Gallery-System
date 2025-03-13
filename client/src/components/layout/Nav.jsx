import { Link } from "react-router-dom";

const Nav = () => {
  let isLoggedIn = false;
  let logout = () => {
    // localStorage()
  };
  return (
    <nav>
      <ul className="flex justify-end list-none text-white body2">
        {isLoggedIn ? (
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
