import { movies } from "./../movies";
import { ADD_FAVORITE, REMOVE_MOVIES } from "../actions/actions";

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
    case REMOVE_MOVIES:
      return {
        ...state,
        favs: state.favs.filter((f) => f.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
