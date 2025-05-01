import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default AuthNav;
