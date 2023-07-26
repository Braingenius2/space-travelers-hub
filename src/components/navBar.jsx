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
          <NavLink to="/rockets" activeClassName={styles.activeLink}><li className={styles.navLinks}>Rockets</li></NavLink>
          <NavLink to="/missions" activeClassName={styles.activeLink}><li className={styles.navLinks}>Missions</li></NavLink>
          <NavLink to="/profile" activeClassName={styles.activeLink}><li className={styles.navLinks}>My Profile</li></NavLink>
        </ul>
      </nav>
    </header>
  );
}
