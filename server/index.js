require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { spawn } = require('child_process');
// const getAIMLResult = require("./test")
//const { tensor } = require("@tensorflow/tfjs");


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

    let result = null;
    var rolesArr = []; 
    let noOfRoles = 0

    let tensorString = tensor;
    const dat = tensorString.split(",");
    // console.log("Data:",dat,"=",dat[0],dat[2],dat[3])

    //call ai model
roleSequencedArray = ["Computer Analyst","Content Writer", "Data Analysis","Data Engineer", "Developer" ,"ML Engineer","Management",
"Marketing","Network Engineer","Security"]
if(dat != null){
        const childPython = spawn('python',['../keras_ai_model/ann.py', dat]);
        childPython.stdout.on('data',(data)=>{
            role = {data};
             console.log(`${data.toString()}`);
             if(data.toString().length === 59){ 
                result = data.toString().substr(2,53).replace(/ True/g,"True").split(" ")
                // console.log("Result: ",result);
                for (const boolValueIndex in result) {
                    console.log(result[boolValueIndex]);
                    if(result[boolValueIndex] == "True"){
                        console.log(roleSequencedArray[boolValueIndex]);
                        // rolesArr += " | "+ roleSequencedArray[boolValueIndex]
                        rolesArr.push(roleSequencedArray[boolValueIndex])
                        noOfRoles++
                        console.log("No of Roles: ",noOfRoles);
                    }
                }
                console.log(rolesArr);
                res.json({
                    status: "ok",
                    Roles: rolesArr,
                    numOfRoles: noOfRoles
                })
             }
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

const port = process.env.PORT || 4000;
app.listen(4000, () => console.log(`server is  on ${port}`))