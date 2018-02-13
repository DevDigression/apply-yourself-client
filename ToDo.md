
# Frontend

* Move job titles to the left, make them blue (like checkpoints on /job/1235345)
* On fetchJobs action success `.then` -> redirect to jobs / catch dispatch fetchError
* Displaying all the job fields on `/dashboard` (after finishing the model+routes)
    * Make job postings(titles?) into links `job/124353463`
    * Goes to /job/123123 that is `sinlge-job.js`
    * get the jobId from url -> `props.match.params.jobid`
    * dispatchGetJob by id. Similar to fetchJobs. on success -> fetchSingleJobSuccess(loads job into currentJob).
    * `sinlge-job.js` is connected to store and gets the job from currentJob + displays.
* DELETE action. And dispatch delete action on DeleteButon
* Edit button (react link to `edit/124353463` )
    * get the id from url (props.match params)
    * loads the object dispatching fetchJobById, populates currentJob -> (similar to single-job.js)
    * `edit/124353463` displays the form with fields prepopulated from store.currentJob
    * click on save -> displatches editJob(newJobData) (PUT request.)

### DevOps

* Deploy FrontEnd to netlify through travis. (Set environment var for API_URL on travis.)

### LATER ON

* statistics
