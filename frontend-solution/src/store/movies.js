const UPDATE_MOVIES = 'lecture/movies/UPDATE_MOVIES';

const updateMovies = movies => ({ type: UPDATE_MOVIES, movies });

export const actions = {
  updateMovies,
};

const getMovies = () => {
  return async (dispatch, getState) => {
    const { auth: { token } } = getState();
    const response = await fetch("http://localhost:8000/api/movies", {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(updateMovies(data));
  }
}

export const thunks = {
  getMovies,
};

const initialState = [
  { id: 0, title: 'Fake Movie', year: 2024, audienceScore: 4.6 }
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVIES: {
      return action.movies;
    }
    default: {
      return state;
    }
  }
}

export default reducer;
