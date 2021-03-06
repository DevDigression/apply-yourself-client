import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const fetchJobsSuccess = data => ({
  type: FETCH_JOBS_SUCCESS,
  data
});

export const FETCH_SINGLE_JOB_SUCCESS = "FETCH_SINGLE_JOB_SUCCESS";
export const fetchSingleJobSuccess = data => ({
  type: FETCH_SINGLE_JOB_SUCCESS,
  data
});

export const CLEAR_JOB_SUCCESS = "CLEAR_JOB_SUCCESS";
export const clearJobSuccess = data => ({
  type: CLEAR_JOB_SUCCESS,
  data
});

export const SORT_JOBS_BY_PRIORITY = "SORT_JOBS_BY_PRIORITY";
export const sortJobsByPriority = data => ({
  type: SORT_JOBS_BY_PRIORITY,
  data
});

export const SORT_JOBS_BY_STATUS = "SORT_JOBS_BY_STATUS";
export const sortJobsByStatus = data => ({
  type: SORT_JOBS_BY_STATUS,
  data
});

export const FETCH_ERROR = "FETCH_ERROR";
export const fetchProtectedDataError = error => ({
  type: FETCH_ERROR,
  error
});

export const fetchProtectedData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/protected`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ data }) => dispatch(fetchJobsSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const clearJobData = clear => dispatch => {
  dispatch(clearJobSuccess(clear));
};

export const sortByPriority = jobs => dispatch => {
  dispatch(sortJobsByPriority(jobs));
};

export const sortByStatus = jobs => dispatch => {
  dispatch(sortJobsByStatus(jobs));
};

export const fetchJobs = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/jobs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(data => dispatch(fetchJobsSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const fetchJobById = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/jobs/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(data => dispatch(fetchSingleJobSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const addJob = job => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      title: job.title,
      company: job.company,
      posting: job.posting,
      image: job.image,
      contact: job.contact,
      priority: job.priority,
      style: job.style,
      keywords: job.keywords,
      notes: job.notes,
      date: new Date(),
      completion: job.completion,
      checkpoints: job.checkpoints,
      id: job._id
    })
  })
    .then(data => dispatch(fetchJobs()))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const addCheckpoint = checkpoint => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/jobs/${checkpoint.jobid}/checkpoint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      stage: checkpoint.stage,
      content: checkpoint.content,
      job: checkpoint.jobid
    })
  })
    .then(res => res.json())
    .then(data => {
      dispatch(fetchSingleJobSuccess(data));
    })
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const editJob = job => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/jobs/edit/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      title: job.title,
      company: job.company,
      posting: job.posting,
      image: job.image,
      contact: job.contact,
      priority: job.priority,
      style: job.style,
      keywords: job.keywords,
      notes: job.notes,
      date: job.date,
      // stage: job.stage,
      completion: job.completion,
      checkpoints: job.checkpoints,
      id: job._id
    })
  })
  .then(data => dispatch(fetchJobs()))
  .catch(err => {
    dispatch(fetchProtectedDataError(err));
  });
};

export const deleteJob = jobid => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/jobs/${jobid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(dispatch(fetchJobs()))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const deleteCheckpoint = checkpoint => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/jobs/${checkpoint.jobid}/checkpoint`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      checkpoint: checkpoint.checkpointid,
      job: checkpoint.jobid
    })
  })
    .then(res => res.json())
    .then(data => dispatch(fetchSingleJobSuccess(data)))
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};

export const addNotes = notes => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/jobs/${notes.jobid}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({
      notes: notes.notes,
      job: notes.jobid
    })
  })
    .then(res => res.json())
    .catch(err => {
      dispatch(fetchProtectedDataError(err));
    });
};
