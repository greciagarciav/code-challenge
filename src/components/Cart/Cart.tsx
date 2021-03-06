import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectShoppingCart, add, remove } from "../../redux/recorder";
import { useEffect } from "react";
import ToggleCart from "../ToggleCart/ToggleCart";

const Cart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector(selectShoppingCart);
    const added = shoppingCart !== [];
    const interval = useRef<object>({})
    const [, setAdd] = useState<object>({});

    const handleClick = () => {
        if(added) {
        
            dispatch(remove());
        }else{
            dispatch(add());
           
        } 
    }

    useEffect(() => {
        return () => {
            
        }
    }, []);

    return(
        <ToggleCart/>
    )
}

export default Cart;
