
import express from "express";
const app = express();
app.listen(8080);

app.use(express.json());
const jwttoken = Math.random()

const auth = (req,res,next) => {
    const token = req.headers.authorization;
    const val = token.split(" ")
    if(val[1]===jwttoken){
        next()
    }
    else{
        res.send("denied")
    }
};

app.post("/login",(req,res)=>{
    res.send(jwttoken)
});


app.use(auth)
app.get("/",auth,(req,res) => {
    res.send("Welcome");

} );

