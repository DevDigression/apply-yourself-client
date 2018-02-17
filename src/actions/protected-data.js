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

export const SORT_JOBS_BY_DATE = "SORT_JOBS_BY_DATE";
export const sortJobsByDate = data => ({
    type: SORT_JOBS_BY_DATE,
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
    console.log(clear);
    dispatch(clearJobSuccess(clear));
};

export const sortByDate = jobs => dispatch => {
    dispatch(sortJobsByDate(jobs));
}

export const fetchJobs = () => dispatch => {
    console.log("fetchJobs");
    // dispatch(authRequest());
    fetch(`${API_BASE_URL}/jobs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => dispatch(fetchJobsSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const fetchJobById = id => dispatch => {
    console.log("fetchJobById: " + id);
    // dispatch(authRequest());
    fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => dispatch(fetchSingleJobSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const addJob = job => dispatch => {
    // dispatch(authRequest());
    return fetch(`${API_BASE_URL}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: job.title,
            company: job.company,
            posting: job.posting,
            image: job.image,
            contact: job.contact,
            deadline: job.deadline,
            style: job.style,
            keywords: job.keywords,
            notes: job.notes,
            date: new Date(),
            stage: job.stage,
            completion: job.completion,
            checkpoints: job.checkpoints,
            id: job._id
        })
    })
        .then(data => console.log(data))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const editJob = job => dispatch => {
    // dispatch(authRequest());
    return fetch(`${API_BASE_URL}/jobs/edit/${job.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: job.title,
            company: job.company,
            posting: job.posting,
            image: job.image,
            contact: job.contact,
            deadline: job.deadline,
            style: job.style,
            keywords: job.keywords,
            notes: job.notes,
            date: job.date,
            stage: job.stage,
            completion: job.completion,
            checkpoints: job.checkpoints,
            id: job._id
        })
    })
        .then(data => console.log(data))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

export const deleteJob = jobid => dispatch => {
    // dispatch(authRequest());
    return fetch(`${API_BASE_URL}/jobs/${jobid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(dispatch(fetchJobs()))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
