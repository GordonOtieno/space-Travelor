import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bookRocket, cancelBooking, fetchRockets } from '../../store/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets);
    }
  }, []);

  const handleBooking = (id) => dispatch(bookRocket(id));
  const handleCancellation = (id) => dispatch(cancelBooking(id));

  return (
    <div className="container mt-3">
      {rockets.map(({
        id, name, description, images, reserved,
      }) => (
        <div key={id} className="mb-4 d-flex">
          <div className="image-container me-5">
            <img src={images[0]} className="thumbnail" alt="rocket thumbnail" />
          </div>
          <div>
            <h3>{name}</h3>
            <p>
              {reserved && <Badge bg="info">Reserved</Badge>}
              {description}
            </p>
            {reserved && (
              <button type="button" className="btn btn-outline-secondary" onClick={() => handleCancellation(id)}>
                Cancel reservation
              </button>
            )}
            {!reserved && (
              <button type="button" className="btn btn-primary" onClick={() => handleBooking(id)}>
                Reserve rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
