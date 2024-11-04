

import toast, { Toaster } from 'react-hot-toast';

// Retrieve all cart items from local storage
const getAllCarts = () => {
    const allCart = localStorage.getItem('cart');
    if (allCart) {
        return JSON.parse(allCart);
    } else {
        return [];
    }
};

// Add item to cart in local storage
const addToCart = (product) => {
    const cart = getAllCarts();

    // Check if the product already exists in the cart
    const isExist = cart.find(item => item.id === product.id);
    if (isExist) {
        toast.error('Product is already added to Cart');
        return cart.length;  // Return current cart count if product is already added
    }

    // Add product to cart and save to local storage
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Product added to Cart');
    return cart.length;  // Return updated cart count
};

// Clear all items from cart in local storage
const clearCart = () => {
    localStorage.removeItem('cart');
    toast.success('All items removed from Cart');
};

// Retrieve all wishlist items from local storage
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

    // Check if the product already exists in the wishlist
    const isExist = wishlist.find(item => item.id === product.id);
    if (isExist) {
        toast.error('Product is already in Wishlist');
        return wishlist.length;  // Return current wishlist count if product is already in wishlist
    }

    // Add product to wishlist and save to local storage
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    toast.success('Product added to Wishlist');
    return wishlist.length;  // Return updated wishlist count
};

export { addToCart, getAllCarts, clearCart, addToWishlist, getAllWishlist };






