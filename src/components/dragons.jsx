import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDragons } from "../redux/dragons/dragonsSlice";

const Dragons = () => {
  const dispatch = useDispatch();
  const { dragons } = useSelector((state) => state.dragons);

  useEffect(() => {
    dispatch(fetchDragons());
  }, [dispatch]);

  return (
    <div>
      <h2>Dragons</h2>
      <div>
        {dragons.map((dragons) => (
          <div key={dragons.id}>
            <img src={dragons.flickr_images[0]} />
            <p>{dragons.name}</p>
            <p>{dragons.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dragons;
