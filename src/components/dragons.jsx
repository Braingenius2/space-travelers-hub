import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div>
      <div>
        {dragons.map((dragons) => (
          <div key={dragons.id} className="dragons">
            <img src={dragons.flickr_images[0]} alt={dragons.name} />
            <div>
              <h2>{dragons.name}</h2>
              <p>
                <span className="reserveSpan" />
                {dragons.description}
              </p>
              <button type="button" className="reserveButton">Reserve Dragon</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dragons;
