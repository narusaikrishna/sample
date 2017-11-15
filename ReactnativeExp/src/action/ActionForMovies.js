import {
    MOVIES_REQUEST,
    MOVIES_FAILURE,
      MOVIES_SUCESS
  } from "../utils/Constant";

export const REQUESTING = "requesting";
export const SUCCESS = "success";
export const ERROR = "error";


export function loginUserRequest() {
  return {
    type: MOVIES_REQUEST,
  };
}

export function loginUserSuccess(movies) {
  return {
    type: MOVIES_SUCESS,
    movies
  };
}

export function loginUserFailure(error) {
  return {
    type: MOVIES_FAILURE,
    error
  };
}


// export function moviesApiCall(email_id, password) {
//   return async (dispatch, getState) => {
//     dispatch(loginUserRequest());
//     try {
//       const result = await api.post("login", 
//       {
//         'email_id':email_id,
//         'password':password,
//       });

//       const resultJson = await result.json();
//       if (resultJson.statusCode > 400) {
//         throw new Error(`${resultJson.body}`);
//       }
    
//       dispatch(loginUserSuccess(resultJson));
//     } catch (e) {
//       dispatch(loginUserFailure(e.message));
//     }
//   };
// }

export function moviesApiCall() {
  return async (dispatch, getState) => {
    dispatch(loginUserRequest());
    try {
        setTimeout(() => {
        dispatch(loginUserSuccess([
            { "title": "Star Wars", "releaseYear": "1977"},
            { "title": "Back to the Future", "releaseYear": "1985"},
            { "title": "The Matrix", "releaseYear": "1999"},
            { "title": "Inception", "releaseYear": "2010"},
            { "title": "Interstellar", "releaseYear": "2014"}
          ]))
          }, 5000)
  } catch (e) {
      dispatch(loginUserFailure(e.message));
    }
  };
}