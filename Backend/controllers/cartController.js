import userModel from "../models/userModel.js"

//add items to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId}) //we get this userId from the middleware(authMiddleware)
        let cartData = await userData.cartData; 
        //we extract the user's cart detail
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] =1;  //if that item is not avilable on cart
        }else{
            cartData[req.body.itemId] +=1;  //if that item is already on cart
        }
        //once we added the item we have to update the user's cartData(in mongoDb) with new cartData
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Added to cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//remove items from user cart
const removeFromCart = async (req, res) => {

}

//fetch user cart data
const getCart = async (req,res) => {

}

export {addToCart, removeFromCart, getCart}