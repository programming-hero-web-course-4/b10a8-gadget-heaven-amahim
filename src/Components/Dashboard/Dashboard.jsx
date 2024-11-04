

const Dashboard = () => {
    return (
        <div>
            <div className="bg-[#9538E2]">
                <div className="text-center py-10 md:w-3/5 w-4/5 mx-auto space-y-4">
                    <h3 className="font-bold text-white md:text-2xl text-xl">Dashboard</h3>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className="space-x-4">
                        <button className="text-white font-medium text-xl rounded-xl px-8 py-4 border-2 border-white">Cart</button>
                        <button className="text-white font-medium text-xl rounded-xl p-4 border-2 border-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;