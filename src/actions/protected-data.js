import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const fetchProtectedDataSuccess = data => ({
    type: FETCH_JOBS_SUCCESS,
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
        .then(({ data }) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};
