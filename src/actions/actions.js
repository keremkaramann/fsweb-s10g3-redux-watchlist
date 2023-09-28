export const ADD_FAVORITE = "ADD_FAVORITE";

export const addToList = (id) => {
  return { type: ADD_FAVORITE, payload: id };
};
