import React, { useContext, useState, useTransition } from 'react';
import { FriendsData } from '../../Context/FriendProviderContext';
import EmptyTimelineMessage from '../../Components/EmptyTimelineMessage/EmptyTimelineMessage';
import { toast } from 'react-toastify';
import HistoryTML from '../../Components/TimeLineHistory/HistoryTML';

const TimeLine = () => {
    const { history } = useContext(FriendsData)
    const [filterHistory, setFilterHistory] = useState(history)
    const handleFilter = (type) => {
        const filtered = history.filter(typ => typ.type === type)
        setFilterHistory(filtered)
        toast.info(`Filtered By ${type}`, {
            position: "top-right",
            autoClose: 2000,
        })
    }
    const handleAllBtn = ()=>{
         setFilterHistory(history)
         toast.info('All History Showed',{
            position: "top-right",
            autoClose: 2000,
         })
    }

    return (
        <div className='bg-sky-50'>
            <div className='max-w-[80%] mx-auto'>
                <h1 className='font-bold text-2xl py-2'>Timeline</h1>
                <div className="dropdown dropdown-bottom lg:dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 bg-white">Filter Timeline</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><button onClick={handleAllBtn}>All History</button></li>
                        <li><button onClick={() => handleFilter("Text")}>Text</button></li>
                        <li><button onClick={() => handleFilter("Call")}>Call</button></li>
                        <li><button onClick={() => handleFilter("Video")}>Video</button></li>
                    </ul>
                </div>

                <div className='py-10'>
                    {
                        history.length === 0 ? <EmptyTimelineMessage /> : <HistoryTML filterHistory={filterHistory} />
                    }
                </div>
            </div>
        </div>
    );
};

export default TimeLine;