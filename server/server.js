console.log('server!');
const { logQueue } = require('../bullConfig');

try{
  logQueue.process("logQueue", async (job) => {
    console.log(JSON.stringify(job.data.body));

    if(job.opts.timestamp % 2 === 0 ){
      //succeed
    }else{
      return Promise.reject('arbitrary failure');
    }
  });

  logQueue.on("completed", (job) => {  
    job.remove();
    console.log('Completed: ' + JSON.stringify(job));
  });

  logQueue.on("failed", async (job) => {
    console.log('Failed: ' + JSON.stringify(job.data.body) + job.attemptsMade);
    console.log('Job: ' + JSON.stringify(job))
  })

}catch(err){
  throw new Error(`ERROR: ${JSON.stringify(err)}`);
}