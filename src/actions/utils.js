export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // JSON error returned, so decode
            return res.json().then(err => Promise.reject(err));
        }
        // Error returned by Express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};
