import {
  FETCH_JOBS_SUCCESS,
  FETCH_SINGLE_JOB_SUCCESS,
  CLEAR_JOB_SUCCESS,
  SORT_JOBS_BY_DATE,
  SORT_JOBS_BY_STATUS,
  FETCH_ERROR
} from "../actions/protected-data";

const initialState = {
  data: "",
  error: null,
  jobs: [],
  stages: [],
  skills: [],
  currentJob: {
    keywords: [],
    checkpoints: [],
    stage: 0,
    completion: 0,
    notes: ""
  }
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_JOBS_SUCCESS) {
    return Object.assign({}, state, {
      jobs: action.data.jobs,
      error: null
    });
  } else if (action.type === FETCH_SINGLE_JOB_SUCCESS) {
    return Object.assign({}, state, {
      currentJob: action.data,
      checkpoints: [...action.data.checkpoints],
      error: null
    });
  } else if (action.type === CLEAR_JOB_SUCCESS) {
    return Object.assign({}, state, {
      currentJob: action.data,
      error: null
    });
  } else if (action.type === SORT_JOBS_BY_DATE) {
    let jobsByDate = action.data.sort(function(a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB - dateA;
    });
    return Object.assign({}, state, {
      jobs: [...jobsByDate],
      error: null
    });
  } else if (action.type === SORT_JOBS_BY_STATUS) {
    console.log(action.data);
    let jobsByStatus = action.data.sort(function(a, b) {
      return Number(b.stage) - Number(a.stage);
    });
    return Object.assign({}, state, {
      jobs: [...jobsByStatus],
      error: null
    });
  } else if (action.type === FETCH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
