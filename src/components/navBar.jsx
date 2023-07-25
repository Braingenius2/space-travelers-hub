import styles from '../styles/navBar.module.css';

export default function NavBar() {
  return (
    <header>
      <nav className={styles.navBar}>
        <div className={styles.logoContainer}>
          <img src="./planet.png" alt="logo" />
          <h1>Space Traveler's Hub</h1>
        </div>
        <ul className={styles.navigation}>
          <li className="navLinks">Rockets</li>
          <li className="navLinks">Missions</li>
          <li className="navLinks">My Profile</li>
        </ul>
      </nav>
    </header>
  );
}
