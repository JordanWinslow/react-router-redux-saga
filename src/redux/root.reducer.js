const INITIAL_STATE = {
  users: [],
  posts: []
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "RECEIVED_USERS":
      return {
        ...state,
        users: action.payload
      };
    case "RECEIVED_POSTS":
      return {
        ...state,
        posts: action.payload
      };
    case "UPDATE_POSTS":
      console.log("POSTS UPDATED WITH: ", action.payload.payload);
      return {
        ...state,
        posts: [action.payload.payload, ...state.posts]
      };
    case "API_ERROR":
      return console.log("ERROR: ", action.payload);
    default:
      return state;
  }
};

export default rootReducer;
