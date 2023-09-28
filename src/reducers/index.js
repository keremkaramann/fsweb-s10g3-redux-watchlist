import { movies } from "./../movies";
import { ADD_FAVORITE } from "../actions/actions";
const initialState = {
  allMovie: movies,
  favs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
