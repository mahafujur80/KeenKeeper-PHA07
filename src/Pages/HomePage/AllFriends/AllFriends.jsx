import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import useFriendsData from '../../../Hook/useFriendsData';
import {ScaleLoader } from 'react-spinners';

const AllFriends = () => {
     const {data, loading} = useFriendsData()
    
  if(loading){
    return <div className='flex items-center justify-center py-40'><ScaleLoader color='#016630' /></div>
  }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10'>
            {
              data.map(friend=><FriendCard key={friend.id} friend={friend}/>)
            }
        </div>
    );
};

export default AllFriends;