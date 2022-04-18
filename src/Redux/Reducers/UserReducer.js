const stateDefault = {
  gridView: false,

  arraySearchName: [],
};

export const UserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SET_GRID_VIEW": {
      const { gridView } = state;
      state.gridView = !gridView;
      return { ...state };
    }

    case "SET_SEARCH": {
      // console.log(action.arraySearchName);
      return { ...state, arraySearchName: action.arraySearchName };
    }
    default: {
      return { ...state };
    }
  }
};
