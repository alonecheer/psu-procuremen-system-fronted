const initialState = {
  profile: [],
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PROFILE":
      return {
        ...state,
        profile: [...state.profile, action.playload],
      };
    default:
      return state;
  }
};
