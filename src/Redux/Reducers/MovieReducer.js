const initialState = {
  arrayMovies: [],

  detailMovie: {},

  isLoadingSlider: true,

  isLoadingDetail: true,

  isRefresh: false,

  top_rated: false,
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_MOVIE": {
      state.arrayMovies = action.arrayMovies;
      return {
        ...state,
      };
    }

    case "SET_DETAIL_MOVIE": {
      state.isLoadingDetail = false;
      state.detailMovie = action.detailMovie;
      return {
        ...state,
      };
    }

    case "HIDE_LOADING_DETAIL": {
      return { ...state, isLoadingDetail: false };
    }

    case "HIDE_LOADING_LIST": {
      return { ...state, isLoadingSlider: false };
    }

    case "SET_TOP_RATED": {
      return { ...state, top_rated: true, isLoadingSlider: true };
    }
    case "SET_NOW_PLAYING": {
      return { ...state, top_rated: false, isLoadingSlider: true };
    }
    case "DISPLAY_LOADING": {
      const { isLoadingSlider } = state;
      if (isLoadingSlider) {
        return state;
      } else {
        return { ...state, isLoadingSlider: true };
      }
    }

    default:
      return state;
  }
};
