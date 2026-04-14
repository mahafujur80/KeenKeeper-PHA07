import React from 'react';
import Banner from './Banner/Banner';
import AllFriends from './AllFriends/AllFriends';

const HomePage = () => {
   
    return (
        <div className='bg-sky-50 h-full'>
        <div className='max-w-[80%] mx-auto'>
            <Banner/>
            <AllFriends/>
        </div>
        </div>
    );
};

export default HomePage;