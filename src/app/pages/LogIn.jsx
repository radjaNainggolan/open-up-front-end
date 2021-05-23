import { useState } from "react";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// If user is already logged in, he can manualy enter log-in url to force LogIn page.
// That needs to be prevented.

const LogIn = ({ isAuthenticated, setAuthenticationStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitClickEvent = async (event) => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      alert("Successfully logged in!");
      setAuthenticationStatus(true);
      history.push("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isAuthenticated ? (
        <h1>Već ste ulogovani!</h1>
      ) : (
        <div style={{ background: "#6F5D83" }} className="min-h-screen">
          <br />
          <br />
          <div className="p-12">
            <h2
              className="text-center text-4xl leading-9 mb-3
        font-semibold text-gray-50"
            >
              Uloguj se na svoj nalog
            </h2>
            <p
              className="text-center text-lg leading-5 
         text-gray-100"
            >
              Ili
              <Link
                to="/sign-up"
                className="text-teal-400 mx-2 text-purple-200 hover:text-purple-300"
              >
                se prijavi!
              </Link>
              Prilično je lako.
              <br />
            </p>
            <br />
            <br />
            <form>
              <div className="flex justify-center">
                <div className="flex items-center justify-center flex-col lg:w-1/3 md:w-2/3 w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email-field"
                    value={email}
                    onChange={changeEmail}
                    placeholder="primjer@primjer.com"
                    className="bg-purple-100 appearance-none border-2 border-purple-100 rounded w-full md:w-7/12 
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <div className="flex items-center justify-center flex-col lg:w-1/3 md:w-2/3 w-full">
                  <label
                    className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
                    htmlFor="password"
                  >
                    Lozinka
                  </label>
                  <input
                    type="password"
                    name="password-field"
                    value={password}
                    onChange={changePassword}
                    placeholder="*********"
                    className="bg-purple-100 appearance-none border-2 border-purple-100 rounded w-full md:w-7/12 
                py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white"
                    required
                  />
                </div>
              </div>
              {/** submit button */}
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  value="Submit"
                  onClick={submitClickEvent}
                  className="text-gray-50 focus:outline-none bg-purple-900 bg-opacity-10 hover:bg-black hover:bg-opacity-10 py-2 px-4 mt-5 rounded-md"
                >
                  Uloguj se
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LogIn;
// <div>
//   {isAuthenticated ? (
//     <h1>Already Logged in!</h1>
//   ) : (
//     <div className="grid justify-items-center">
//       <div className="log-in-div">
//         <form className="log-in-form" method="POST">
//           <label htmlFor="email-field"> Enter email </label>

//           <input
//             className="log-in-input"
//             type="email"
//             name="email-field"
//             value={email}
//             onChange={changeEmail}
//           />
//           <br />
//           <label className="" htmlFor="">
//             {" "}
//             Enter password{" "}
//           </label>

//           <input
//             className="log-in-input"
//             type="password"
//             name="password-field"
//             value={password}
//             onChange={changePassword}
//           />
//           <br />
//           <input
//             className="log-in-submit"
//             type="submit"
//             value="Submit"
//             onClick={submitClickEvent}
//           />
//         </form>
//       </div>
//     </div>
//   )}
// </div>
