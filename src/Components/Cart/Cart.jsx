import React, { useEffect, useState } from 'react';
import { FaSortNumericDownAlt } from "react-icons/fa";
import { getAllCarts } from '../../Utils';
import { FaRegStar } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const carts = getAllCarts();
        setProducts(carts);
    }, []);

    useEffect(() => {
        
        const cost = products.reduce((acc, product) => acc + product.price, 0);
        setTotalCost(cost.toFixed(2));
    }, [products]);

    
    const sortByPrice = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    };

    return (
        <div className='mt-10'>
            {/* headings */}
            <div className='flex flex-col md:flex-row md:justify-between items-center'>
                <div>
                    <h3 className='font-medium text-2xl'>Cart</h3>
                </div>
                <div className='flex-col md:flex-row flex items-center gap-2'>
                    <h3 className='font-medium text-2xl'>Total Cost: <strong>{totalCost}</strong>$</h3>
                    <button onClick={sortByPrice} className='text-xl btn text-white bg-[#9538e2b7]'>
                        Sort By Price <FaSortNumericDownAlt />
                    </button>
                    <button 
                        className='text-xl btn text-white bg-[#9538E2B7]' 
                        disabled={products.length === 0}
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className='mt-5 flex-col gap-6 flex'>
                {products.map(product => (
                    <div key={product.id} className='flex items-center justify-between rounded-xl shadow-lg py-4 px-8'>
                        <div className='flex md:flex-row flex-col gap-4 items-center'>
                            <div>
                                <img src={product.img} className='w-36 border-2 rounded-xl' alt={product.title} />
                            </div>
                            <div>
                                <h3 className='text-2xl font-medium'>{product.title}</h3>
                                <p className='text-xl mt-1'>Price: <strong>{product.price}</strong> $</p>
                                <p className="mt-2 flex gap-1">Rating: <strong>{product.rating}</strong> <FaRegStar className='text-xl' /></p>
                            </div>
                        </div>
                        {/* delete button */}
                        <div>
                            <button className='btn btn-error'><MdDeleteForever /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
