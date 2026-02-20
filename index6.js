
// HTTP request METHODS

// reponse and request are objects which comes and goes in json format

// http://localhost:8080/?name/john params 

// 1st METHOD
// using params for getting response from server
// req.params.name
// req.params.age

// import express from  'express'
// const app = express()
// app.listen(8080)
// app.get("/name/:name",(req,res)=>{
//     res.send("Hello " + req.params.name);//now the cycle is completed and we exited the loop

// });




// 2nd METHOD
// app.get("/",(=>{}))

// http://localhost:8080/?name=john&age=21 query string  stores data in url like field value pair
// req.query.name
// req.query.age

import express from  'express'
const app = express()
app.listen(8080)
app.get("/",(req,res)=>{
    res.send("Hello " + req.query.name + req.query.age);//now the cycle is completed and we exited the loop

});

// 3rd METHOD
// //3. another request method using POST
// req.body.name
// select json and post method and choose body to add another user or id



// headers
// req.headers



// url
// req.url