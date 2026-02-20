// // localhost:8080/1234
// // should be authenticated with 1234 only or else access denied


import express from "express";
const app = express();
app.listen(8080);

const auth = (req , res , next) =>{
    const key = req.params.key;
    if(key=="1234"){
        next();
    }else{
        res.send("access denied");
    }


};


app.get("/:key",auth,(req,res)=>{

   res.send("Welcome");
    
       
});





// import express from "express";
// const app = express();

// app.listen(8080, () => {
//   console.log("Server started on port 8080 🚀");
// });

// // auth middleware
// const auth = (req, res, next) => {
//   const code = req.params.code;

//   if (code === "1234") {
//     next(); // allow request
//   } else {
//     res.status(401).send("Access Denied ❌");
//   }
// };

// // protected route
// app.get("/:code", auth, (req, res) => {
//   res.send("Welcome ✅");
// });