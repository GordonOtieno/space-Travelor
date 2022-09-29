import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const sections = useSelector((state) => ([
    {
      title: 'My Missions',
      data: state.missions.filter((mission) => mission.reserved),
    },
    {
      title: 'My Rockets',
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
  ]));

  return (
    <div className="container mt-4">
      <div className="row">
        {sections.map(({ title, data }) => (
          <div className="col-md-4" key={title}>
            <h4>{title}</h4>
            <ul className="subscriptions-container">
              {data.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
