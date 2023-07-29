import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets/rocketsSlice';

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
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <p>{rocket.rocket_name}</p>
          <p>{rocket.rocket_type}</p>
          {/* Render the reservation button or cancel reservation button */}
          {/* based on the reserved status */}
          {rocket.reserved ? (
            <button type="button" onClick={() => handleCancelReservation(rocket.id)}>Cancel Reservation</button>
          ) : (
            <button type="button" onClick={() => handleReserveRocket(rocket.id)}>Reserve Rocket</button>
          )}
        </div>
      ))}
    </>
  );
};

export default Rockets;
