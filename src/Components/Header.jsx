import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
    const { users, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => console.error(error.message));
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/alltouristspots">All Tourist Spots</NavLink></li>
        <li><NavLink to="/addtouristspot">Add Tourist Spot</NavLink></li>
        <li><NavLink to="/mylist">My List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        {
                            users ?
                                <div className="flex items-center justify-between">
                                    <div className="tooltip md:tooltip-bottom tooltip-right" data-tip={users.displayName}>
                                        <img className="w-10 h-10 rounded-full" src={users.photoURL} alt={users.displayName} />
                                    </div>
                                    <button onClick={handleSignOut} className="btn text-sm">Log Out</button>
                                </div>
                                :
                                <div>
                                    <li className="btn btn-ghost"><NavLink to="/login">Login</NavLink></li>
                                    <li className="btn btn-ghost"><NavLink to="/register">Register</NavLink></li>
                                </div>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-xl text-xs">Tour Ease</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="flex cursor-pointer gap-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input checked={theme === 'light' ? false : true} onChange={handleTheme} type="checkbox" className="toggle theme-controller" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {
                    users ?
                        <div className="md:flex hidden items-center gap-4">
                            <div className="tooltip md:tooltip-bottom tooltip-right" data-tip={users.displayName}>
                                <img className="md:w-10 md:h-10 w-5 h-5 rounded-full" src={users.photoURL} alt={users.displayName} />
                            </div>
                            <button onClick={handleSignOut} className="btn text-sm">Log Out</button>
                        </div>
                        :
                        <div className="md:flex hidden gap-4">
                            <li className="btn btn-ghost"><NavLink to="/login">Login</NavLink></li>
                            <li className="btn btn-ghost"><NavLink to="/register">Register</NavLink></li>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;