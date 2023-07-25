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
          <li className={styles.navLinks}>Rockets</li>
          <li className={styles.navLinks}>Missions</li>
          <li className={styles.navLinks}>My Profile</li>
        </ul>
      </nav>
    </header>
  );
}