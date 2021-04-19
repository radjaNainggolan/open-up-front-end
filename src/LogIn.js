import {useState} from 'react';
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

// If user is already logged in, he can manualy enter log-in url to force LogIn page.
// That needs to be prevented.

const LogIn = ({isAuthenticated, setAuthenticationStatus}) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();

    const submitClickEvent = async (event) => {
        event.preventDefault();

        try {
            await Auth.signIn(email, password);
            alert("Successfully logged in!")
            setAuthenticationStatus(true);
            history.push("/");
        }

        catch(e) {
            alert(e.message);
        }
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <>
        {isAuthenticated ? (
            <h1>
                Already Logged in!
            </h1>
        )
        : (
            <div className = "log-in-div">
                <form method = "POST">
                    <label htmlFor="email-field"> Enter email </label>
                    <br/>
                    <input type="email" name="email-field" value = {email} onChange = {changeEmail}/>
                    <br/>
                    <label htmlFor=""> Enter passowrd </label>
                    <br/>
                    <input type="password" name="password-field" value = {password} onChange = {changePassword}/>
                    <br/>
                    <input type="submit" value="Submit" onClick = {submitClickEvent}/>
                </form>
            </div>
        )}
        </>
    );
}
 
export default LogIn;