import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../styles/navBar.module.css';

export default function NavBar() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    // Get the actual path without the slash.
    const currentPath = location.pathname.substring(1);
    setCurrentPage(currentPath);
  }, [location]);
  return (
    <header>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <img src="./planet.png" alt="logo" />
          <h1>Space Traveler&apos;s Hub</h1>
        </div>
        <ul className={styles.navigation}>
          <li className={`${styles.navLinks} ${currentPage === '' ? styles.activeLink : ''}`}>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li className={`${styles.navLinks} ${currentPage === 'missions' ? styles.activeLink : ''}`}>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className={`${styles.navLinks} ${currentPage === 'dragons' ? styles.activeLink : ''}`}>
            <NavLink to="dragons">Dragons</NavLink>
          </li>
          <li className={`${styles.navLinks} ${currentPage === 'profile' ? styles.activeLink : ''}`}>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
