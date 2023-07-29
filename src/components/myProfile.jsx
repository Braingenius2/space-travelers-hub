import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from '../styles/profile.module.css';

const MyProfile = () => {
  const { dragons } = useSelector((state) => state.dragons);
  const { rockets } = useSelector((state) => state.rockets);

  function dragonsList() {
    const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

    if (reservedDragons.length) {
      return reservedDragons.map((dragon) => (
        <tr key={dragon.id}>
          <td>{dragon.name}</td>
        </tr>
      ));
    }

    return (
      <tr>
        <td>
          <i>No Dragons</i>
        </td>
      </tr>
    );
  }

  function rocketsList() {
    const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

    if (reservedRockets.length) {
      return reservedRockets.map((rocket) => (
        <tr key={rocket.id}>
          <td>{rocket.rocket_name}</td>
        </tr>
      ));
    }

    return (
      <tr>
        <td>
          <i>No Rockets</i>
        </td>
      </tr>
    );
  }

  return (
    <div className={styles.container}>
      <table aria-label="table of my dragons">
        <thead>
          <tr>
            <th>My Dragons</th>
          </tr>
        </thead>
        <tbody className={styles.body}>{dragonsList()}</tbody>
      </table>

      <table aria-label="table of my rockets">
        <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
        </thead>
        <tbody className={styles.body}>{rocketsList()}</tbody>
      </table>
    </div>
  );
};

export default MyProfile;
