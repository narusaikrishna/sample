import { combineReducers } from 'redux';
import MovieReducer from './MoviesReducer'
export default combineReducers({
    moviesReducer: MovieReducer,
  });