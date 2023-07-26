import { NavLink } from 'react-router-dom';
import styles from '../styles/navBar.module.css';

export default function NavBar() {
  return (
    <header>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <img src="./planet.png" alt="logo" />
          <h1>Space Traveler&apos;s Hub</h1>
        </div>
        <ul className={styles.navigation}>
          <li className={styles.navLinks}>
            <NavLink exact to="/rockets" activeClassName={styles.activeLink}>Rockets</NavLink>
          </li>
          <li className={styles.navLinks}>
            <NavLink to="/missions" activeClassName={styles.activeLink}>Missions</NavLink>
          </li>
          <li className={styles.navLinks}>
            <NavLink to="/profile" activeClassName={styles.activeLink}>My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
