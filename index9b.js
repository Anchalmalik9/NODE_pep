// modifiy auth and get the output as 
// {
//     "token" :1234
// }


import express from "express";
const app = express();
app.listen(8080);

app.use(express.json());

const auth = (req , res , next) =>{
const newuser = req.body;
console.log(newuser);
        

if(Number(newuser.token) === 1234){
       
       
        next();
       
    }else{
        res.send("access denied");
    }


};


app.post("/1234",auth,(req,res)=>{

res.send("welcome ")
    
       
 });




