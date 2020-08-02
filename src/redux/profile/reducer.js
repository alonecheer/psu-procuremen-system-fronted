const intialState = {
  profile: [],
};

export const ProfileReducer = (state = intialState, action) => {
  switch (action.type) {
    case "":
      return {
        ...state,
        profile: [...state.profile, action.playload],
      };
    default:
      return state;
  }
};
