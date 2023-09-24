import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-semibold underline" : ""
        } to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-semibold underline" : ""
        } to="/donation">Donation</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] text-lg font-semibold underline" : ""
        } to="/statistics">Statistics</NavLink></li>
    </>

    return (
        <div className="container mx-auto md:px-10 md:py-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium text-[#0B0B0B]">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl"><img className="w-auto h-12" src={"../src/assets/Logo.png"} alt="" /></a>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu-horizontal gap-10 items-center px-1 text-lg">
                        {
                            navLinks
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;