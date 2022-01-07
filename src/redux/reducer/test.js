
const TESTING = "app/TESTING";

const initialState = {

}


export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case TESTING:
      return {
        ...state,

      }
    default:
      return state;
  }
}