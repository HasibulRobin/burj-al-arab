
import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Context/useAuth';


import './Login.css'

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const goingTo = location.state?.from?.pathname;
    // console.log(goingTo);
    const { user, setUser, setError, handleGoogleSignIn, handleSignOut } = useAuth();
    const handleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {
                setUser(result.user)
                history.push(goingTo)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    // console.log(handleGoogleSignIn);
    return (
        <div className="login-form">
            <form>
                <h2>Please login</h2>
                <input type="email" name="" id="" />
                <br />
                <input type="password" name="" id="" />
                <br />
                <input type="submit" value="Submit" />
                <br />
                <br />
                {user.email ? <Button onClick={handleSignOut} variant="contained">Log out</Button>
                    :
                    <Button onClick={handleSignIn} variant="contained">Sign In With Google</Button>
                }
            </form>

        </div>
    );
};

export default Login;