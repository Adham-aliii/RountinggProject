import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cart from "../Components/Cart/Cart";

export let CartContext = createContext()



export default function CartContextProvider({ children }) {

    let headers = {
        token: localStorage.getItem('userToken')
    }

    const [cart, setCart] = useState(null)


    async function addProductToCart(productId) {

        try {
            let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
                productId: productId
            }, {
                headers: headers
            });

            toast('Product Added Successuflly ❤', {
                duration: 3000
            });
            setCart(data)

        } catch (err) {
            console.log(err);

        }

    }
    async function checkout(shippingAddress) {

        try {
            let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`, {
                shippingAddress
            }, {
                headers: headers
            });

            // console.log(data);
            window.location.href=data.session.url
            
        } catch (err) {
            console.log(err);

        }

    }
    async function removeProduct(productId) {

        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                headers: headers
            });

            setCart(data)

        } catch (err) {
            console.log(err);

        }

    }
    async function removeCart() {

        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
                headers: headers
            });

            setCart(null)

        } catch (err) {
            console.log(err);

        }

    }
    async function updateProductCount(productId , count) {
        if(count>0){

            try {
                let { data } = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
                    count: count
                }, {
                    headers: headers
                });
    
                
                setCart(data)
    
            } catch (err) {
                console.log(err);
            }
        }else{
            removeProduct(productId);
        }

        

    }
    async function getCart(productId) {

        try {
            let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
                headers: headers
            });

            // console.log(data);

            setCart(data)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getCart()
    },[])



    return <CartContext.Provider value={{removeCart, addProductToCart, getCart, setCart , cart , updateProductCount , removeProduct , checkout}}>
        {children}
    </CartContext.Provider>
}