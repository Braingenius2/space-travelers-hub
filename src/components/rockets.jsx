import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets);
  return (
    <>
      {rocketsList.rockets.map((rocket) => (
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
