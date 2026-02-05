import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    //Initializes state as an empty object.
    //we make it to store all cart details in a single Object

    //url of our backend
    const url = "http://localhost:4000"         //we define it from here so we can access it from anywhere
    const [token, setToken] = useState("")          //token for chceking whether user is logged in or not

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){   //Checks whether the item already exists in the cart.
            setCartItems((prev)=>({...prev, [itemId]:1}))
            // ...prev ->  Copies all existing cart items (immutability).
            //[itemId]: 1   Adds the item with quantity = 1.
        }else{
           setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1})) 
           //Uses prev[itemId] to get the current quantity.
        }
    }

    const removeFromCart = (itemId) => {
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item)
                totalAmount += itemInfo.price* cartItems[item];
            }
        }
        return totalAmount;
    }

    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])    //whenever cartItems updates it will run

    const contextValue = {       //we exporting all these things through contextAPI so that these can be accessed by any component of the page
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider