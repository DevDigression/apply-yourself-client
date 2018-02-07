import { FETCH_JOBS_SUCCESS, FETCH_ERROR } from "../actions/protected-data";

const initialState = {
  data: "",
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_JOBS_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null
    });
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
