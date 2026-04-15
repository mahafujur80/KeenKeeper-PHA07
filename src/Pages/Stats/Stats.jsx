import React, { useContext } from 'react';
import { FriendsData } from '../../Context/FriendProviderContext';
import EmptyStatsMSG from '../../Components/EmptyStatsMessage/EmptyStatsMSG';
import Chart from '../../Components/Chart/Chart';
const Stats = () => {

    const {history} = useContext(FriendsData)

    return (
        <div className='bg-sky-50'>
            <div className='max-w-[80%] mx-auto py-10 space-y-3'>
                <h1 className='text-3xl font-bold max-md:text-xl'>Friendship Analytics</h1>
                <div className='bg-white rounded-xl p-5 '>
                   {
                     history.length === 0 ? <EmptyStatsMSG/> : <Chart/>
                   }
                </div>
            </div>
        </div>
    );
};

export default Stats;