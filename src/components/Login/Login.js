import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

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
        <div className="mt-5 pt-5">
            <div>
                <Button onClick={handleGoogleSignIn}>Login with Google</Button>
            </div>
        </div>
    );
};

export default Login;