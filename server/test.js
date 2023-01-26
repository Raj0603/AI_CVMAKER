const { spawn } = require('child_process'); 

test = [0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0]


const childPython = spawn('python',['../keras_ai_model/careerann.py',test[0],test[1],test[2],test[3],test[4],test[5],test[6],test[7],
test[8],test[9],test[10],test[11],test[12],test[13],test[14],test[15],test[16],test[17],test[18],test[19]]);

childPython.stdout.on('data',(data)=>{
    console.log(`${data}`);
})



childPython.stderr.on('data',(data)=>{
    console.error(`${data}`);
})


// childPython.on('close',(code)=>{
//     console.log(`child process exited with code ${code}`);
// })