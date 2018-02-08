import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import { FETCH_JOBS_SUCCESS } from "./protected-data";
import { fetchProtectedDataSuccess } from "./protected-data";

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === "ValidationError") {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const addJob = (title, company, contact, deadline) => dispatch => {
    // dispatch(authRequest());
    return fetch(`${API_BASE_URL}/jobs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            company,
            contact,
            deadline
        })
    });
    // Reject any requests which don't return a 200 status, creating
    // errors which follow a consistent format
    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    // .catch(err => {
    //     const { code } = err;
    //     const message =
    //         code === 401
    //             ? "Invalid information"
    //             : "Unable to create new job, please try again";
    //     dispatch(authError(err));
    //     // Could not authenticate, so return a SubmissionError for Redux
    //     // Form
    //     return Promise.reject(
    //         new SubmissionError({
    //             _error: message
    //         })
    // );
    // })
};

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
        .then(data => dispatch(fetchProtectedDataSuccess(data)));

    // .then(data => data.jobs.forEach(job => console.log(job)));
    // Reject any requests which don't return a 200 status, creating
    // errors which follow a consistent format
    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    // .catch(err => {
    //     const { code } = err;
    //     const message =
    //         code === 401
    //             ? "Invalid information"
    //             : "Unable to create new job, please try again";
    //     dispatch(authError(err));
    //     // Could not authenticate, so return a SubmissionError for Redux
    //     // Form
    //     return Promise.reject(
    //         new SubmissionError({
    //             _error: message
    //         })
    // );
    // })
};
