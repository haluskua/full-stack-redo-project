const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INFO":
      return action.information;
    default:
      return state;
  }
};

export default reducer;
