import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Outlet} from 'react-router';
import Footer from '../Shared/Footer/Footer';

const RootLayout = () => {

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;