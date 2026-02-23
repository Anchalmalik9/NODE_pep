import express from "express"
import { createProduct, getProducts } from "../controllers/productController.js";

const productRouter = express.Router();


// productRouter.get("/",(req,res)=>{  //get request will go tp "/"
//     res.send("This is get request of productRouter");
// });

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);

productRouter.post("/",(req,res)=>{
    res.send("This is post request of productRouter");   //post req will go to "/api/users"
});




export default productRouter;
