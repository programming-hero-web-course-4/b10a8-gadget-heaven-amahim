
import { useLoaderData, useParams } from "react-router-dom";
import Product from '../Product/Product';

const Products = () => {
    const { category } = useParams();
    const data = useLoaderData();

    const products = (!category || category === "All Products") 
        ? data 
        : data.filter(product => product.category === category);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                products.length > 0 
                    ? products.map(product => <Product product={product} key={product.id} />)
                    : <p className="text-xl text-center font-bold">No products found.</p> 
            }
        </div>
    );
};

export default Products;






