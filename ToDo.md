
# Frontend


Delete the console logs -->
 Date/Status -> on click -> dispatch sortByDate -> reducer sorts 

<!-- * Make Dashboard/Stats protected -->

* Polish design / functionality

 3. Create a button where you can delete the checkpoints. 
 
 BONUS.
 Figure out a way of keeping checkpoints in order by using the step #. (so maybe sort the job.checkpintArray after pushing in a new checkpoint on step 1? ). then save the job. 


ToDos
- After adding a checkpoint/editing -> go back to job/3423 not to jobs. 
- Make the jobs on /jobs responsive more cohesive
- Finish add/delete checkpoints
- Sort checkpoints `job.chekpoints.sort(function(a, b){return a.stage > b.stage})`

Notes!
- Add a big textArea where you can write and it autosaves!.
- Notes is going to be a `String` on the model
- New route to edit notes!.  Post job/jobId/notes
- When the user writes. Wait 10 secs and save the note by posting to the route 
- when you open job/324543 prepopulate notes. 
- As a backup. Also Post job/jobId/notes on componentWillUnmount.  

Bonus
- react-nvd3 https://github.com/NuCivic/react-nvd3
### DevOps


### LATER ON

* statistics
