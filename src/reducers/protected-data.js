import {
  FETCH_JOBS_SUCCESS,
  FETCH_SINGLE_JOB_SUCCESS,
  CLEAR_JOB_SUCCESS,
  FETCH_ERROR
} from "../actions/protected-data";

const initialState = {
  data: "",
  error: null,
  jobs: [],
  currentJob: {}
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_JOBS_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      jobs: action.data.jobs,
      error: null
    });
  } else if (action.type === FETCH_SINGLE_JOB_SUCCESS) {
    return Object.assign({}, state, {
      currentJob: action.data,
      error: null
    });
  } else if (action.type === CLEAR_JOB_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      currentJob: action.data,
      error: null
    });
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
