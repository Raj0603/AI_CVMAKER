require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const { spawn } = require('child_process');

//const { tensor } = require("@tensorflow/tfjs");



//  calling database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// app.use('/Login', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
//   });
let dat = null
let role = null

//getting data from career form
app.post("/post_tensor", cors(), async (req, res) => {
    let { tensor } = req.body;
    dat = tensor;
    console.log(dat)

    //call ai model
    if(dat != null){
        const childPython = spawn('python',['../keras_ai_model/ann.py',dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],
        dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0],dat[0]]);
    
        childPython.stdout.on('data',(data)=>{
            role = {data};
             console.log(`${data}`);
        })
        
        
        
        childPython.stderr.on('data',(data)=>{
            console.error(`${data}`);
        })
        
        childPython.on('close',(code)=>{
            console.log(`child process exited with code ${code}`);
        })
    }
})





//send final prediction
app.get("/CareerForm", cors(), (req, res) => {
    res.send(role);
})


// routes to database and  collection(tables) 
app.use("/hacky/users", userRoutes);
app.use("/hacky/auth", authRoutes);


const port = process.env.PORT || 4000;
app.listen(4000, () => console.log(`server is  on ${port}`))