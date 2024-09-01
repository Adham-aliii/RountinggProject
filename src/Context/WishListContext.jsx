import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export let wishListContext = createContext()



export default function WishListContextProvider({ children }) {

    let headers = {
        token: localStorage.getItem('userToken')
    }

    const [wishlist, setWishList] = useState([])


    async function addProductToWishList(productId) {

        try {
            let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
                productId: productId
            }, {
                headers: headers
            });

            // console.log(data);
            

            toast('Product Added Successuflly to wish list 💞', {
                duration: 3000
            });
            setWishList(data)

        } catch (err) {
            console.log(err);
        }

    }
    
    async function removeProduct(productId) {

        try {
            let { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
                headers: headers
            });

            setWishList(data)

        } catch (err) {
            console.log(err);
        }

    }
    
    async function getWishList(productId) {

        try {
            let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
                headers: headers
            });

            // console.log(data);
            

            setWishList(data)

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getWishList()
    },[])



    return <wishListContext.Provider value={{ addProductToWishList, getWishList, setWishList , wishlist , removeProduct }}>
        {children}
    </wishListContext.Provider>
}