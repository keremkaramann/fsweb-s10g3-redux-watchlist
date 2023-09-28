export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_MOVIES = "REMOVE_MOVIES";

export const addToList = (id) => {
  return { type: ADD_FAVORITE, payload: id };
};
export const deleteMovie = (id) => {
  return { type: REMOVE_MOVIES, payload: id };
};
