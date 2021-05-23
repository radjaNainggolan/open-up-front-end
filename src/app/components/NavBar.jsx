import { Link } from "react-router-dom";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

const NavBar = ({
  isAuthenticated,
  setAuthenticationStatus,
  setIsAuthenticating,
}) => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const onMenuClick = () => {
    setOpen(!open);
  };

  const logOut = async () => {
    await Auth.signOut();
    setAuthenticationStatus(false);
    history.push("/");
  };

  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const menuHandler = (e) => {
    e.preventDefault();
    MenuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true);
  };
  return (
    <div
      style={{ background: "#6F5D83" }}
      className="md:flex  md:items-center md:justify-center text-gray-50 font font-karla"
    >
      <div className="md:flex hidden relative z-10 flex flex-row items-baseline justify-between w-4/5 py-4">
        <Link to="/" className="text-2xl font-semibold hover:text-gray-200">
          🥫&nbsp;Foodstock
        </Link>
        <div className="flex flex-row text-lg">
          <Link
            to="/rewards"
            style={{}}
            className="ml-5 hover:bg-black hover:bg-opacity-10 py-1 px-4 rounded-md"
          >
            Rewards
          </Link>
          <Link
            to="/search"
            style={{}}
            className="ml-5 hover:bg-black hover:bg-opacity-10 py-1 px-4 rounded-md"
          >
            Search
          </Link>
        </div>
        {isAuthenticated ? (
          <div className="flex flex-row text-lg">
            <Link
              to="/profile"
              className="ml-5 hover:bg-black hover:bg-opacity-10 py-1 px-4 rounded-md"
            >
              Profile
            </Link>
            <button
              onClick={logOut}
              className="hover:bg-black focus:outline-none hover:bg-opacity-10 py-1 px-4 rounded-md"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="flex flex-row text-lg">
            <Link
              to="/log-in"
              className="ml-5 hover:bg-black hover:bg-opacity-10 py-1 px-4 rounded-md"
            >
              Log in
            </Link>
            <Link
              to="/sign-up"
              className="hover:bg-black hover:bg-opacity-10 py-1 px-4 rounded-md"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      {/* lg above */}

      {/* mobila below */}
      <div
        style={{ background: "#6F5D83" }}
        className="md:hidden relative z-10 py-3 mb-10 flex flex-col px-4"
      >
        {/* logo + hamburger */}

        <div className="flex flex-row items-center justify-between">
          <Link to="/" className="text-2xl font-semibold">
            🥫Foodstock
          </Link>
          {/* setup dugme da se otvara meni na klik */}
          <button className="focus:outline-none" onClick={menuHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isAuthenticated ? (
          <div
            className={`mobile-menu ${
              MenuIsOpen ? "" : "hidden"
            } z-20 relative flex flex-col items-start px-0 mt-3`}
          >
            <Link
              to="/search"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Browse
            </Link>
            <Link
              to="/rewards"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Rewards
            </Link>
            <Link
              to="/profile"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Profile
            </Link>
            <button
              onclick={logOut}
              className="text-lg font-regular focus:outline-none px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Log out
            </button>
          </div>
        ) : (
          <div
            className={`mobile-menu ${
              MenuIsOpen ? "" : "hidden"
            } z-20 relative flex flex-col items-start px-0 mt-3`}
          >
            <Link
              to="/search"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Browse
            </Link>
            <Link
              to="/rewards"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Rewards
            </Link>
            <Link
              to="/log-in"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Log In
            </Link>
            <Link
              to="/sign-up"
              className="text-lg font-regular px-1 py-1 rounded-md hover:bg-black hover:bg-opacity-10"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

//   <nav className="nav-bar">
//     <div className="flex flex-wrap items-center space-x-3">
//       <img
//         src="/images/bezkorpacropped.png"
//         className="w-14 h-14 ml-3"
//         alt=""
//       />
//       <h1 className=" hidden xxs:block text-3xl font-pattaya  text-red-500">
//         Foodstock
//       </h1>
//     </div>
//     <div id="Links" className="ml-auto hidden sm:block">
//       <Link to="/" className="btn-nav">
//         Home
//       </Link>
//       <Link to="/search" className="btn-nav">
//         Search
//       </Link>
//       <Link to="/rewards" className="btn-nav">
//         Rewards
//       </Link>
//     </div>
//     <div className=" xxs:ml-56 xs:ml-80 sm:hidden">
//       <button
//         onClick={onMenuClick}
//         className=" focus:outline-none active:outline-none"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-10 w-10"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//     </div>
//     {isAuthenticated ? (
//       <div id="sign" className="hidden sm:block ml-auto">
//         <Link to="/" className="btn-nav">
//           {" "}
//           Profile{" "}
//         </Link>
//         <Link to="/" className="btn-nav" onClick={logOut}>
//           {" "}
//           Log out
//         </Link>
//       </div>
//     ) : (
//       <div id="sign" className="hidden sm:block ml-auto">
//         <Link to="/log-in" className="btn-nav">
//           {" "}
//           Sign in
//         </Link>
//         <Link to="/sign-up" className="btn-nav">
//           Sign up{" "}
//         </Link>
//       </div>
//     )}
//   </nav>
//   {open && <DropDownMenu></DropDownMenu>}
// </div>

// const DropDownMenu = () => {
//   return (
//     <div onMouseLeave={onMenuClick} className="drop-down-nav">
//       <div>
//         <Link onClick={onMenuClick} to="/" className="drop-down-btn">
//           Home
//         </Link>
//       </div>
//       <div>
//         <Link onClick={onMenuClick} to="/search" className="drop-down-btn">
//           Search
//         </Link>
//       </div>
//       <div>
//         <Link onClick={onMenuClick} to="/rewards" className="drop-down-btn">
//           Rewards
//         </Link>
//       </div>

//       {isAuthenticated ? (
//         <>
//           <div>
//             <Link
//               onClick={onMenuClick}
//               to="/log-in"
//               className="drop-down-btn"
//             >
//               Log in
//             </Link>
//           </div>
//           <div>
//             <Link
//               onClick={onMenuClick}
//               to="/sign-up"
//               className="drop-down-btn"
//             >
//               Sign up
//             </Link>
//           </div>
//         </>
//       ) : (
//         <>
//           <div>
//             <Link
//               onClick={onMenuClick}
//               to="/log-in"
//               className="drop-down-btn"
//             >
//               Log in
//             </Link>
//           </div>
//           <div>
//             <Link
//               onClick={onMenuClick}
//               to="/sign-up"
//               className="drop-down-btn"
//             >
//               Sign up
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
