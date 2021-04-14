import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
const NavBar = () => {
    const [logedIn , setLogedIn] = useState(false);
    const [open , setOpen] = useState(false);
    
    const login = () => {
        setLogedIn(true);
    };
    
    const logout = () => {
        setLogedIn(false);
    };

    const onMenuClick = () => {
        setOpen(!open);
    };

    const DropDownMenu = () => {
        return (
            <div onMouseLeave={onMenuClick} className="w-40 h-60 z-50 bg-red-500 grid justify-items-center gap-5 mt-2 xs:ml-80 absolute rounded-xl sm:hidden">
                
                <div>
                    <Link onClick={onMenuClick} to="/" className="drop-down-btn">
                        Home
                    </Link>
                </div>
                <div>
                    <Link onClick={onMenuClick} to="/search" className="drop-down-btn">
                        Search
                    </Link>
                </div>
                <div>
                    <Link onClick={onMenuClick} to="/rewards" className="drop-down-btn">
                        Rewards
                    </Link>
                </div>
                <div>
                    <Link onClick={onMenuClick} to="/log-in" className="drop-down-btn">
                        Log in
                    </Link>
                </div>
                <div>
                    <Link onClick={onMenuClick} to="/sign-up" className="drop-down-btn">
                        Sign up
                    </Link>
                </div>

            </div>
        );
    }

    return ( 
        <div>
            <nav className="nav-bar">
                <h1 className="">Logo Foodstock</h1>
                <div id="Links" className="ml-auto hidden sm:flex sm:flex-wrap">
                    <Link to="/" className="btn-nav">  Home </Link>
                    <Link to="/search" className="btn-nav">Search</Link>
                    <Link to="/rewards" className="btn-nav">Rewards</Link>
                </div>
                <div className="xs:ml-80 sm:hidden">
                    <button onClick={onMenuClick} className=" focus:outline-none active:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {logedIn === false && (
                    <div id="sign" className="hidden sm:flex">
                        <Link to="/log-in" onClick={login} className="btn-nav">Sign in</Link>
                        <Link to="/sign-up" className="btn-nav">Sign up</Link>
                    </div>
                )}
                {logedIn === true && (
                    <div id="sign" className="hidden sm:flex">
                        <Link to="/log-in"  className="btn-nav">Profile</Link>
                        <Link to="/sign-up" onClick={logout} className="btn-nav">Log out</Link>
                    </div>
                )}
            </nav>
            {open && <DropDownMenu></DropDownMenu>}
        </div>

     );
}
 
export default NavBar;

