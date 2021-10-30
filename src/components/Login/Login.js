import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {

    const {signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            history.push(redirect_uri)
        })
    }

    return (
        <div className="my-5 py-5">
            <div className="border login-form w-25 m-auto">
                <div className="d-flex justify-content-center align-items-center">
                <img style={{width: '60px'}} className="img-fluid pt-3" src="https://seeklogo.com/images/B/beach-tour-logo-4505456896-seeklogo.com.png" alt="" />
                <h3 className="mt-4">Tour Express</h3>
                </div>
                <img className="img-fluid w-25 mt-5" src="https://image.flaticon.com/icons/png/512/1255/1255974.png" alt="" />
                <h4 className="mt-3">Please Login</h4>
                <div>
                <Button variant="primary" onClick={handleGoogleSignIn}><i className="fab fa-google"></i> Login with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;