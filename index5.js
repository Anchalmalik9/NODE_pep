
// import express from "express";

// const app = express();

// app.get("/a/x/b/y/c/z", (req, res) => {
//     let x = parseInt(req.params.x);
//     let y = parseInt(req.params.y);
//     let z = parseInt(req.params.z);

//     res.send(x + y + z);
// });

// app.listen(8080);

// app.get("/Home",(req,res)=>{
//     res.send("Hello world");
// });



import express from "express";   //express is our web-server here which we made

const app = express();


app.get("/", (req, res) => {
    //console.log(req.url);
   


     console.log(req.url);
    console.log(req.method);//the request which comes goes to which method; output:GET
    console.log(req.body);//output :undefined because we receive body in POST
    console.log(req.headers);//
    res.send("response from server for /home/page1");
});