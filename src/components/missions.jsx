import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/missions.module.css';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

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
              <td>
                { mission.reserved
                  ? (<p className={styles.Active}>Active Member</p>)
                  : (<p className={styles.nonActive}>NOT A MEMBER</p>) }
              </td>
              <td>
                { mission.reserved
                  ? (<button className={styles.leave} type="button" aria-label="Leave Mission" onClick={() => handleLeaveMission(mission.mission_id)}>Leave Misson</button>) : (<button className={styles.join} type="button" aria-label="Join Mission" onClick={() => handleJoinMission(mission.mission_id)}>Join Misson</button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
