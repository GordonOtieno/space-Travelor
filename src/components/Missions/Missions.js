import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Badge, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission, fetchMissions } from '../../store/misions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);
  const availableMisions = missions.length;
  console.log(availableMisions);
  useEffect(() => {
    if (!availableMisions) {
      dispatch(fetchMissions);
    }
  }, [dispatch, availableMisions]);

  const handleJoin = (id) => dispatch(joinMission(id));
  const handleLeave = (id) => dispatch(leaveMission(id));

  return (
    <div className="container mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{'  '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, desc, reserved,
          }) => (
            <tr key={id}>
              <td><p className="fw-bold">{name}</p></td>
              <td><p>{desc}</p></td>
              <td className="align-middle">
                {reserved && <Badge bg="info">Active Member</Badge>}
                {!reserved && <Badge bg="secondary">NOT A MEMBER</Badge>}
              </td>
              <td className="col-2 align-middle text-center">
                {reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => handleLeave(id)}
                  >
                    Leave Mission
                  </Button>
                  )}
                {!reserved
                  && (
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => handleJoin(id)}
                  >
                    Join Mission
                  </Button>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
