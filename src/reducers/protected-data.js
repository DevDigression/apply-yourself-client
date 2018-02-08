import { FETCH_JOBS_SUCCESS, FETCH_ERROR } from "../actions/protected-data";

const initialState = {
  data: "",
  error: null,
  jobs: [{ title: "asd", notes: "aasdsasd" }]
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_JOBS_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      jobs: [...action.data.jobs],
      error: null
    });
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
