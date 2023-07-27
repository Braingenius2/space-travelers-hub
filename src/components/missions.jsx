import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) return (<div>Loading...</div>);
  if (error) return (<div>{error}</div>);

  return (
    <div>
      <h2>Missions</h2>
      <div>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <div>
              Mission-
              {mission.mission_name}
            </div>
            <div>
              Description-
              {mission.description}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
