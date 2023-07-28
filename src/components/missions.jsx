import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
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
      <Table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripton</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>NOT A MEMBER</td>
              <td><button type="button">Join Misson</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
