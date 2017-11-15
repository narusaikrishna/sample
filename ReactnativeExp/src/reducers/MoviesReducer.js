import {
    MOVIES_REQUEST,
    MOVIES_FAILURE,
      MOVIES_SUCESS
  } from "../utils/Constant";
  
  const MovieReducer = (
    state = {
      movies: [],
      loading: false,
      error: '',
    },
    action
  ) => {
    switch (action.type) {
      case MOVIES_SUCESS:
        return Object.assign({}, state, {
          movies: action.movies,
          error: '',
          loading: false,
        });
      case MOVIES_REQUEST:
        return Object.assign({}, state, {
          movies: [],
          loading: true,
          error: ''
        });
      case MOVIES_FAILURE:
        return Object.assign({}, state, {
          movies: [],
          loading: false,
          error:action.error
        });
      default:
        return state;
    }
  };
  export default MovieReducer;
  
  