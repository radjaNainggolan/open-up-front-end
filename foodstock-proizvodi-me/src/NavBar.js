import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
const NavBar = () => {
    const [logedIn , setLogedIn] = useState(false);
    const handleClick = () => {
        setLogedIn(true);
    };


    return ( 
        <nav className="bg-amber-500 rounded-b-xl p-3 flex items-center m-auto font-karla text-lg text-white border-b-4 border-red-500">
            <h1 className="">Logo Foodstock</h1>
            <div id="Links" className="ml-auto">
                <Link to="/" className="btn-nav">  Home </Link>
                <Link to="/search" className="btn-nav">Search</Link>
                <Link to="/rewards" className="btn-nav">Rewards</Link>
            </div>
            
            {logedIn === false && (
                <div id="sign" className="ml-auto">
                    <Link to="/sign-in" onClick={handleClick} className="btn-nav">Sign in</Link>
                    <Link to="/sign-up" className="btn-nav">Sign up</Link>
                </div>
            )}
            {logedIn === true && (
                <div id="sign" className="ml-auto">
                    <Link to="/sign-in" onClick={handleClick} className="btn-nav">Profile</Link>
                    <Link to="/sign-up" className="btn-nav">Log out</Link>
                </div>
            )}


        </nav>

     );
}
 
export default NavBar;

