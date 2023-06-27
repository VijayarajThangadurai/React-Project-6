import React, {useState} from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=>{
const [items, setItems]= useState([]);

    const addItemToCartHandler = (item) => {
      const existingItemIndex = cartContext.items.findIndex(
        (i) => i.id ===item.id
      );
      if(existingItemIndex === -1){
        setItems([...items, item]);
      } else{
        const temp =[...items];
        temp[existingItemIndex].quantity =
         parseInt(temp[existingItemIndex].quantity) +
          parseInt(item.quantity);
        setItems(temp);
      }
      console.log("inside addItemToCartHandler", cartContext);
    };
     const removeItemFromCartHandler =(id) => {};
     const cartContext={
        items:items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message : "click here",
     };

    return (
        <CartContext.Provider value ={cartContext}>
            {console.log("inside cartContext.provider", cartContext)}
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;