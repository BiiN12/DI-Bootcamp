const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state, count: state.count + 1
    };
  }
};
