const initialState = {
  arrayMovies: [],

  detailMovie: {},

  isLoadingSlider: true,

  isLoadingDetail: true,

  isRefresh: false,
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LIST_MOVIE": {
      state.arrayMovies = action.arrayMovies;
      state.isLoadingSlider = false;
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

    case "REFRESH_LIST": {
      let { isLoadingSlider, isLoadingDetail } = state;

      return {
        ...state,
        isLoadingSlider: !isLoadingSlider,
        isLoadingDetail: !isLoadingDetail,
      };
    }
    default:
      return state;
  }
};
