import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';
import styles from '../styles/dragons.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelReservation = (rocketId) => {
    dispatch(cancelReservation(rocketId));
  };

  return (
    <div className={styles.container}>
      {rockets.map((rocket) => (
        <div key={rocket.id} className={styles.dragons}>
          <img src={rocket.flickr_images[0]} alt={rocket.name} className={styles.images} />
          <div>
            <h2>{rocket.rocket_name}</h2>
            <p>
              {rocket.reserved && <span className={styles.reserveSpan}>Reserved</span>}
              {' '}
              {rocket.description}
            </p>
            {/* Render the reservation button or cancel reservation button */}
            {/* based on the reserved status */}
            {rocket.reserved ? (
              <button type="button" onClick={() => handleCancelReservation(rocket.id)} className={styles.cancelButton}>Cancel Reservation</button>
            ) : (
              <button type="button" onClick={() => handleReserveRocket(rocket.id)} className={styles.reserveButton}>Reserve Rocket</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
