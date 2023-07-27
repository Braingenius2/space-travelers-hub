import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMissions } from "../redux/missions/missionsSlice";

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions);
  }, [dispatch]);

  return (
    <div>
      <h2>Missions</h2>
      <div>
        {missions.map((mission) => (
          <div>
            <div>{mission.mission_id}</div>
            <div>{mission.mission_name}</div>
            <div>{mission.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
