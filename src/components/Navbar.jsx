import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/about'>About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/contact'>contact</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/profile'>profile</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Real state</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><button onClick={handleLogOut}>LogOut</button></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>



                    </>
                        : <Link to='/login' className="btn btn-sm">login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;