// 🌐 What is a REST API?

// REST (Representational State Transfer) API is a set of rules for building APIs that allow a client (browser / app) to communicate with a server using HTTP requests.



// 👉 In simple words:
// REST API = client asks for data / sends data → server responds

// 🧱 Core Principles of REST API 🧠
// 1️⃣ Stateless

// Server does not remember previous requests

// Every request contains all required data

// 2️⃣ Client–Server Architecture

// Client handles UI

// Server handles logic + data

// 3️⃣ Resource-Based

// Everything is treated as a resource (noun)

// ✅ /users
// ✅ /products/5












// MiddleWare
// we use req.url in 3 places

import express from "express";
const app = express();
app.listen(8080);

const logger = (req , res , next) =>{

req.message = "This is logger function";
// console.log(req.url);    //here it is used to get url printed
next()
}


// app.use(logger);            //logger will also hold the request object

// no matter how many api you create but firstly middleware will run and hold the request 



// middleware is used for checking authentication in some ends or roots
app.get("/",logger,(req,res)=>{

    // app.use(logger);  //if you use here output will be undefined
    // console.log(req.url);      //here it is used to get url printed
    console.log(req.message);
    res.json(req.url);       //to return the url   //output when only url is requested :"/"
});



app.get("/Home",(req,res)=>{
    // console.log(req.url);      //here it is used to get url printed
    console.log(req.message);
    res.json(req.url);       //to return the url   //output when only url is requested :"/"
});