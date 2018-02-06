import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR
} from "../actions/protected-data";

const initialState = {
  data: "",
  error: null,
  jobs: [{ title: "asd", notes: "aasdsasd" }]
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_JOBS_SUCCESS) {
    return Object.assign({}, state, {
      jobs: action.jobs,
      error: null
    });
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
