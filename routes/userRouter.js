import express from "express"
import { getUsers,createUser } from "../controllers/userController.js";

const userRouter = express.Router();
// userRouter.get("/",(req,res)=>{  //get request will go tp "/"
//     res.send("This is get request of userRouter");
// });

userRouter.get("/", getUsers);
userRouter.post("/", createUser);

userRouter.post("/",(req,res)=>{
    res.send("This is post request of userRouter");   //post req will go to "/api/users"
});



export default userRouter;
