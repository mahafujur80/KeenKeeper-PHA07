import React from 'react';
import { Link } from 'react-router';

const Error404Page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            
            <h1 className="text-8xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Page Not Found
            </h2>
            <p className="text-gray-500 mt-2 text-center max-w-md">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default Error404Page;