
import express from 'express'
const app = express()
app.listen(8080,() => console.log("Server Started"));
// app.get("/:id",(req,res)=>{
//     console.log(req.url);
//     console.log(req.params);//returns parameters
//     res.send(req.params.id);
// });


app.get("/:a/:b", (req, res) => {
    let a = parseInt(req.params.a);
    let b = parseInt(req.params.b);

    res.send(a + b);
});

app.get("/:id/:email",(req,res)=>{
    console.log(req.url);//after using this we will get what url is user writing in the browser
    console.log(req.params);
    res.send(req.params.id+req.params.email);

});//short url when 1 or 2 parameters are there


app.get("/id/:id/email/:email",(req,res)=>{    //output:
    console.log(req.url);//after using this we will get what url is user writing in the browser
    console.log(req.params);
    res.send(req.params.id+req.params.email);

});//for more than 2 parameters


app.get("/Home",(req,res)=>{
    res.send("Hello world");
});



// import express from "express";

// const app = express();

// app.get("/:a/:b", (req, res) => {
//     let a = parseInt(req.params.a);
//     let b = parseInt(req.params.b);

//     res.send(a + b);
// });

// app.listen(8080);
