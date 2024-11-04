import React from 'react';
import { FaSortNumericDownAlt } from "react-icons/fa";
const Cart = () => {
    return (
        <div className='mt-10'>
            {/* headings */}
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='font-medium text-2xl'>Cart</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-2xl'>Total Cost 0$</h3>
                    <button className='text-xl btn text-white bg-[#9538e2b7]'>Sort By Price <FaSortNumericDownAlt /></button >
                    <button className='text-xl btn text-white bg-[#9538E2B7]'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;