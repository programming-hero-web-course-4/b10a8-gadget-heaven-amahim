import HomeBanner from "../HomeBanner/HomeBanner";
const Home = () => {
    return (
        <div>
            <HomeBanner/>
            {/* item heading*/}
            <div className="text-center">
                <h3 className="text-black text-2xl md:text-3xl font-bold">Explore Cutting-Edge Gadgets</h3>
            </div>
            {/* items */}
            <div className="w-[90%] mx-auto flex md:flex-row   flex-col gap-4 mt-10">
                {/* cate div */}
                <div className="w-1/4  flex flex-col gap-4 shadow-xl rounded-xl items-center py-8">
                <button className="w-4/5 py-2 px-4  rounded-xl btn btn-outline border-2 border-[#9538E2]  ">All Products</button>
                <button className="w-4/5 py-2 px-4  rounded-xl btn btn-outline border-2 border-[#9538E2]  ">Laptops</button>
                <button className="w-4/5 py-2 px-4  rounded-xl btn btn-outline border-2 border-[#9538E2]">Phones</button>
                <button className="w-4/5 py-2 px-4  rounded-xl btn btn-outline border-2 border-[#9538E2]  ">Watches</button>
                <button className="w-4/5 py-2 px-4  rounded-xl btn btn-outline border-2 border-[#9538E2]  ">Accessories</button>
                </div>
                {/* items product */}
                <div className="w-3/4">

                </div>
            </div>
        </div>
    );
};

export default Home;