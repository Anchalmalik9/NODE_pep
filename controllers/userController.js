
// userRouter.get("/",(req,res)=>{  //get request will go tp "/"
//     res.send("This is get request of userRouter");
// });



import {users} from "../models/userModel.js"
export const getUsers = (req, res) => {
    res.json(users);
};

export const createUser = (req, res) =>{
    res.send("this is post request of userRouter");
}