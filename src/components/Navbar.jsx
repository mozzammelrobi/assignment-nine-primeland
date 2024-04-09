import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
// console.log(user)
    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/about'>About us</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/contact'>contact</NavLink></li>
{  user && <li><NavLink className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'} to='/profile'>profile</NavLink></li>}
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
                <a className="text-[#301934] text-3xl font-bold gap-0"><span className="text-[#9333ea]">Prime</span>Land</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">
                                <div className="avatar">
                                    <div className="w-9 rounded-full">
                                        <img src={user?.photoURL || "https://i.ibb.co/4fhSnF2/27-removebg-preview-1.jpg" } />
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user?.displayName} </a></li>
                                <li><button onClick={handleLogOut}>LogOut</button></li>
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