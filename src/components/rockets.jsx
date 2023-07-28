import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <img src={rocket.flickr_images[0]} alt={rocket.name} />
          <p>{rocket.rocket_name}</p>
          <p>{rocket.rocket_type}</p>
        </div>
      ))}
    </>
  );
};

export default Rockets;
