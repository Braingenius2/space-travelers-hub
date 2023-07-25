export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="logoContainer">
          <img src="./planet.png" alt="logo" />
          <h1>Space Traveler's Hub</h1>
        </div>
        <ul className="navigation">
          <li className="navLinks">Rockets</li>
          <li className="navLinks">Missions</li>
          <li className="navLinks">My Profile</li>
        </ul>
      </nav>
    </header>
  );
}
