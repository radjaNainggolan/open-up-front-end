import { useState } from "react";
import validator from "validator";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = ({ setAuthenticationStatus }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [newUser, setNewUser] = useState(null);
  const [confirmationCode, setConfirmationCode] = useState("");
  const history = useHistory();

  const validateForm = () => {
    return (
      validator.isEmail(email) &&
      password === confirmedPassword &&
      password.length >= 8
    );
  };

  const submitClickEvent = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const newUser = await Auth.signUp({
          username: email,
          password: password,
        });
        setNewUser(newUser);
      } catch (e) {
        alert(e);
      }
    } else {
      alert(
        "Invalid form data. Try again. (Password needs to have at least 8 characters.)"
      );
    }
  };

  const verifyClickEvent = async (event) => {
    event.preventDefault();

    try {
      await Auth.confirmSignUp(email, confirmationCode);
      await Auth.signIn({
        username: email,
        password: password,
      });

      setAuthenticationStatus(true);
      history.push("/");
    } catch (e) {
      alert(e);
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmedPassword = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const changeConfirmationCode = (event) => {
    setConfirmationCode(event.target.value);
  };

  return (
    <div style={{ background: "#6F5D83" }} className="min-h-screen">
      {!newUser ? (
        <div className="p-12">
          <h2
            className="text-center text-4xl leading-9 mb-3
          font-semibold text-gray-50"
          >
            Napravi korisnički nalog
          </h2>
          <p
            className="text-center text-lg leading-5 
           text-gray-100"
          >
            Ili
            <Link
              to="/log-in"
              className="text-teal-400 mx-2 text-purple-200 hover:text-purple-300"
            >
              se uloguj
            </Link>
            ako već imaš nalog.
            <br />
          </p>
          <br />
          <br />
          <form>
            <div className="flex justify-center">
              <div className="lg:w-1/3 md:w-2/3 w-full flex items-center justify-center flex-col">
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
              <div className="lg:w-1/3 md:w-2/3 w-full flex items-center justify-center flex-col">
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

            <div className="flex justify-center mt-4">
              <div className="lg:w-1/3 md:w-2/3 w-full flex items-center justify-center flex-col">
                <label
                  className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
                  htmlFor="confirm-password-field"
                >
                  POTVRDI LOZINKU
                </label>
                <input
                  type="password"
                  name="confirm-password-field"
                  value={confirmedPassword}
                  onChange={changeConfirmedPassword}
                  placeholder="*********"
                  className="bg-purple-100 appearance-none border-2 border-purple-100 rounded w-full md:w-7/12 
                  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white"
                  required
                />
              </div>
            </div>
            {/* submit button */}
            <div className="mt-4 flex justify-center">
              <button
                disabled={!validateForm()}
                type="submit"
                value="Submit"
                onClick={submitClickEvent}
                className="text-gray-50 focus:outline-none bg-purple-900 bg-opacity-10 hover:bg-black hover:bg-opacity-10 py-2 px-4 mt-5 rounded-md"
              >
                Registruj se
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div
          style={{ background: "#6F5D83" }}
          className="pt-16 flex flex-col text-white items-center justify-center"
        >
          <form className="log-in-form" method="POST">
            <label htmlFor="confirmation-field"> Konfimacioni Kod </label>
            <p className="text-xs">
              {" "}
              Unesite konfimacioni kod koji je poslat na Vaš e-mail.{" "}
            </p>

            <input
              className="bg-purple-100 mt-4 appearance-none border-2 border-purple-100 rounded w-full md:w-12/12 
              py-1 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white"
              type="tel"
              name="confirmation-field"
              onChange={changeConfirmationCode}
            />
            <br />
            <input
              className="text-gray-50 focus:outline-none bg-purple-900 bg-opacity-10 hover:bg-black hover:bg-opacity-10 py-2 px-4 mt-5 rounded-md"
              type="submit"
              value="Verify"
              onClick={verifyClickEvent}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
