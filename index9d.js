
// send email and password


import express from "express";
const app = express();

app.listen(8080);

const auth = (req,res,next)=>{
    res.send("Welcome")
}