
# Frontend

<!-- - Keywords: Split them into arrays before submitting to server -->
<!-- - Style of company -> make it a dropdown -->
<!-- - Make images smaller on the left [jobs page] -->
<!-- - Add/edit job form -> make it wider -->
<!-- - Change `visit job site` to be an `<a>` tag -->
<!-- - Delete the console logs -->
<!-- - Change all state-based redirects -->
<!-- - Make Add-job-page and edit-job-page use the same form -->
<!-- - On the frontend-> send deadlines as dates to server -->
<!-- - Date/Status -> on click -> dispatch sortByDate -> reducer sorts -->

<!-- * Make Dashboard/Stats protected -->

* Polish design / functionality

1. Create a new route for adding checkpoints. this one should be a different one from EDIT /jobs/234546. 
 - It could be POST /jobs/23454/
 - the new route first finds the job with the correct id.
 - it receives in the body a note made up of content+title+step(from a dropdown) and so on and pushes into the job's note array.
 - saves the job
 - returns success!
 2. Create the action that dispatches the fetch. On sucess, dispatch fetch the job you are on again so that the new note shows up. 
 3. Create a button where you can delete the checkpoints. 
 
 BONUS.
 Figure out a way of keeping checkpoints in order by using the step #. (so maybe sort the job.checkpintArray after pushing in a new checkpoint on step 1? ). then save the job. 

### DevOps


### LATER ON

* statistics
