import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configStore';
import Header from './components/Navbar';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />

          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
