
import express from "express";   //express is our web-server here which we made

const app = express();


app.get("/", (req, res) => {
    console.log(req.url);
    res.send("response from server for /");
});


app.get("/home", (req, res) => {
    console.log(req.url);
    res.send("Welcome to Home Page /home");
});
app.get("/home/page1", (req,res)=>{
    console.log(req.url);
    console.log(req.method);//the request which comes goes to which method; output:GET
    console.log(req.body);//output :undefined because we receive body in POST
    console.log(req.headers);//
    res.send("response from server for /home/page1");

});

app.listen(8080, () => {
    console.log("Server started on port https://localhost:8080");
});
