
import express from "express"
const app = express();
app.listen(8080,()=>{
    console.log("Server Started");
});

app.use(("/public"),express.static("public"));



// app.get("/",(req,res)=>{

// })