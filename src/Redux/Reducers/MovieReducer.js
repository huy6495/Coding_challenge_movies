const initialState = {
  arrayMovies: [],

  detailMovie: {},

  isLoadingSlider: true,

  isLoadingDetail: true,
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_MOVIE": {
      return { ...state, arrayMovies: action.arrayMovies };
    }

    case "SET_DETAIL_MOVIE": {
      return { ...state, detailMovie: action.detailMovie };
    }

    case "HIDE_LOADING_DETAIL": {
      return { ...state, isLoadingDetail: false };
    }

    case "HIDE_LOADING_LIST": {
      return { ...state, isLoadingSlider: false };
    }
    default:
      return state;
  }
};
