const BASE_URL = 'https://api.spacexdata.com/v3/rockets';
const LOAD_ROCKETS = 'rockets/LOAD_ROCKETS';
const BOOK_ROCKET = 'rockets/BOOK_ROCKET';
const CANCEL_BOOKING = 'rockets/CANCEL_BOOKING';

const loadRockets = (payload) => ({
  type: LOAD_ROCKETS,
  payload,
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const cancelBooking = (id) => ({
  type: CANCEL_BOOKING,
  id,
});

// thunk reducer
export const fetchRockets = async (dispatch) => {
  const response = await fetch(BASE_URL);
  const rockets = await response.json();

  dispatch(loadRockets(rockets.map((rocket) => ({
    id: rocket.rocket_id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    images: rocket.flickr_images,
  }))));
};

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ROCKETS:
      return action.payload;
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }

        return {
          ...rocket,
          reserved: true,
        };
      });
    case CANCEL_BOOKING:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }

        return {
          ...rocket,
          reserved: false,
        };
      });
    default:
      return state;
  }
};

export default rocketReducer;
