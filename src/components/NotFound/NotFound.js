import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5">
            <img src="https://image.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg" alt="" />
            <br />
            <Link to="/home">
                <button className="btn btn-primary mb-5">Back to Home Page</button>
            </Link>
        </div>
    );
};

export default NotFound;