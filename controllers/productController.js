// productRouter.get("/",(req,res)=>{  //get request will go tp "/"
//     res.send("This is get request of productRouter");
// });

import {products} from "../models/productModel.js"
export const getProducts = (req, res) => {
    res.json(products);
};

export const createProduct = (req,res) => {
    res.send("this is post request of productRouter");
}