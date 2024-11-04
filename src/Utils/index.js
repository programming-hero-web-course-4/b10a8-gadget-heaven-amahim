
import toast, { Toaster } from 'react-hot-toast';
// get all coffees from ls
const getAllCarts =() =>{
    const allCart = localStorage.getItem('cart')
    
    if(allCart) {
        const cart = JSON.parse(allCart)
        // console.log(cart)
        return cart
        
    }else{
        // console.log([])
        return []
    }
}


// add item to ls
const  addToCart = product =>{
    const cart = getAllCarts();
    // console.log(cart)
    const isExist = cart.find(item => item.id == product.id)
    if(isExist){
        return toast.error('Product Is Already Added');
    } 
    cart.push(product)
    localStorage.setItem('cart',JSON.stringify(cart))

}


// rmv from ks

export {addToCart , getAllCarts}