
import toast, { Toaster } from 'react-hot-toast';

//  get all item ls
const getAllCarts = () => {
    const allCart = localStorage.getItem('cart');
    if (allCart) {
        return JSON.parse(allCart);
    } else {
        return [];
    }
};

// Add item  loc st
const addToCart = (product) => {
    const cart = getAllCarts();

    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
        toast.error('Product is already added to Cart');
        return cart.length;
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Product added to Cart');
    return cart.length;
};

// Clear all items local storage
const clearCart = () => {
    localStorage.removeItem('cart');
    
};

// getall wishlist  local storage
const getAllWishlist = () => {
    const allWishlist = localStorage.getItem('wishlist');
    if (allWishlist) {
        return JSON.parse(allWishlist);
    } else {
        return [];
    }
};

// Add item to wishlist in local storage
const addToWishlist = (product) => {
    const wishlist = getAllWishlist();

    // already exists in the wishlist
    const isExist = wishlist.find(item => item.id === product.id);
    if (isExist) {
        toast.error('Product is already in Wishlist');
        return wishlist.length;
    }

    // Add  wishlist n save to ls
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Product added to Wishlist');
    return wishlist.length; 
};

    const removeFromWishlist = (id) => {
    const wishlist = getAllWishlist();
    const updatedWishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
};

// Check if item is in the cart
const isInCart = (id) => {
    const cart = getAllCarts();
    return cart.some(item => item.id === id);
};



export { addToCart, getAllCarts, clearCart, addToWishlist, getAllWishlist ,removeFromWishlist,isInCart};






