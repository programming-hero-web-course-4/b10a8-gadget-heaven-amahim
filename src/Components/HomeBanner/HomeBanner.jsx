
const HomeBanner = () => {
    return (
        <div className="bg-[#9538E2] w-[97%] mx-auto rounded-b-xl md:mb-96 mb-36">
        {/* banner */}
            <div className="text-center md:w-[70%] mx-auto space-y-4 md:space-y-8 pt-8 pb-12 md:pt-16 md:pb-64">
                <h3 className="text-xl md:text-[48px] font-bold md:leading-[60px] text-white">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="text-black bg-white rounded-xl p-4">Shop Now</button>
            </div>
            {/* banner img */}
            <div className="border-2 border-white p-2 md:p-4 rounded-xl bg-white/50 backdrop-blur-md
                absolute  bottom-[5%] md:bottom-[-55%] left-1/2 transform -translate-x-1/2">
                <img src="/banner.jpg" className="rounded-xl "/>
            </div>
        </div>
    );
};

export default HomeBanner;