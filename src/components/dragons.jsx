import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon, cancelDragon } from '../redux/dragons/dragonsSlice';
import styles from '../styles/dragons.module.css';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((state) => state.dragons);

  return (
    <div className={styles.container}>
      {dragons.map((dragons) => (
        <div key={dragons.id} className={styles.dragons}>
          <img src={dragons.flickr_images[0]} alt={dragons.name} className={styles.images} />
          <div>
            <h2>{dragons.name}</h2>
            <p>
              {dragons.reserved && <span className={styles.reserveSpan}>Reserved</span>}
              {dragons.description}
            </p>
            <button
              type="button"
              className={dragons.reserved ? styles.cancelButton : styles.reserveButton}
              onClick={() => {
                dispatch(dragons.reserved
                  ? cancelDragon(dragons.id)
                  : reserveDragon(dragons.id));
              }}
            >
              {dragons.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dragons;
