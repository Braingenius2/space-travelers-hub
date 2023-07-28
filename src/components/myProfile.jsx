import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from '../styles/profile.module.css';

const MyProfile = () => {
  const { dragons } = useSelector((state) => state.dragons);

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

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>My Dragons</th>
          </tr>
        </thead>
        <tbody className={styles.body}>{dragonsList()}</tbody>
      </table>
    </div>
  );
};

export default MyProfile;
