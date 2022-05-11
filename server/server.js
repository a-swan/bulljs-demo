console.log('server!');
const { logQueue } = require('../bullConfig');

try{
  logQueue.process("logQueue", async (job) => {
    console.log(JSON.stringify(job.data.body));

    if(job.processedOn % 2 === 0 ){
      //succeed
      job.data.status = "success"
    }else{
      job.data.status = "error"
      return Promise.reject('arbitrary failure');
    }
  });

  logQueue.on("completed", (job) => {  
    console.log('Completed: ' + JSON.stringify(job));
  });

  logQueue.on("failed", async (job) => {
    console.log('Failed: ' + JSON.stringify(job.data.body) + job.attemptsMade);
    console.log('Job: ' + JSON.stringify(job))

    if(job.attemptsMade == job.opts.attempts){
      console.log('Removing from queue. Process permanently failed job below')
    }
  })

}catch(err){
  throw new Error(`ERROR: ${JSON.stringify(err)}`);
}