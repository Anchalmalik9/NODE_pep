// http://localhost:8080/?name/john params 

// 1st METHOD
// using params for getting response from server


// import express from  'express'
// const app = express()
// app.listen(8080)
// app.get("/name/:name",(req,res)=>{
//     res.send("Hello " + req.params.name);//now the cycle is completed and we exited the loop

// });




// 2nd METHOD
// app.get("/",(=>{}))

// http://localhost:8080/?name=john query string

import express from  'express'
const app = express()
app.listen(8080)
app.get("/",(req,res)=>{
    res.send("Hello " + req.query.name + req.query.age);//now the cycle is completed and we exited the loop

});