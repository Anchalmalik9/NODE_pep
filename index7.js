
import express from 'express'
const app = express();

app.listen(8080);

app.get("/",(req,res)=>{
    const user ={
        name:"John",
        email:"John@gmail.com",
        role:"Student"

    };
    // res.send(user); it will go in json format only because it is a object
    res.json(user);//.json works the same as .send
});

//3. another request method using POST
// req.body.name
// select json and post method and choose body to add another user or id