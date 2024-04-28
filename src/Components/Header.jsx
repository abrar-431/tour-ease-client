import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
    const { users, logOut } = useContext(AuthContext);
    const handleSignOut = () =>{
        logOut()
        .then()
        .catch(error=>console.error(error.message));
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/alltouristspots">All Tourist Spots</NavLink></li>
        <li><NavLink to="/addtouristspot">Add Tourist Spot</NavLink></li>
        <li><NavLink to="/mylist">My List</NavLink></li>
        {
            users ?
                <div className="flex md:flex-row flex-col items-center gap-4">
                    <div className="tooltip md:tooltip-bottom tooltip-right" data-tip={users.displayName}>
                        <img className="md:w-10 md:h-10 w-5 h-5 rounded-full" src={users.photoURL} alt={users.displayName}/>
                    </div>
                    <button onClick={handleSignOut} className="btn text-sm">Log Out</button>
                </div>
                :
                <div className="flex gap-4">
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </div>
}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  space-x-4">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-xl text-xs">Tour Ease</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Header;