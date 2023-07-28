import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissions } from '../redux/missions/missionsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) return (<div>Loading...</div>);
  if (error) return (<div>{error}</div>);

  return (
    <div style={style}>
      <Table striped bordered hover style={{ width: '90%' }}>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Descripton</th>
            <th>Status</th>
            <th><p style={{ display: 'none' }}>Action</p></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>NOT A MEMBER</td>
              <td><button type="button" aria-label="Join Mission">Join Misson</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
