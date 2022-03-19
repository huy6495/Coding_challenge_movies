const initialState = {
  arrayMovies: [],
  detailMovie: {},
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_MOVIE": {
      return { ...state, arrayMovies: action.arrayMovies };
    }

    case "SET_DETAIL_MOVIE": {
      return { ...state, detailMovie: action.detailMovie };
    }

    default:
      return state;
  }
};
