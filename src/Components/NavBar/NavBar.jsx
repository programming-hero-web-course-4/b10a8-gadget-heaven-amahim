import { NavLink, useLocation } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const links = (
        <>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "text-[#22ecf3]" : ""}
                >
                    Home
                </NavLink>
            </li>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/statistics" 
                    className={({ isActive }) => isActive ? "text-[#9538E2]" : ""}
                >
                    Statistics
                </NavLink>
            </li>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/dashboard" 
                    className={({ isActive }) => isActive ? "text-[#9538E2]" : ""}
                >
                    Dashboard
                </NavLink>
            </li>
            <li className={isHomePage ? "text-white" : "text-black"}>
                <NavLink 
                    to="/gadgetnews" 
                    className={({ isActive }) => isActive ? "text-[#9538E2]" : ""}
                >
                    Gadget News
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`w-[97%] mx-auto mt-5 rounded-t-xl relative ${isHomePage ? "bg-[#9538E2]" : "bg-white"}`}>
            {/* nav */}
            <div className="navbar md:w-4/5 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#9538E2]/2 backdrop-blur-md rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className={`md:text-2xl font-bold ${isHomePage ? "text-white" : "text-black"}`}>Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                <a className="btn text-xl"><GiSelfLove /></a>
                <a className="btn text-xl"><FaOpencart /></a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
