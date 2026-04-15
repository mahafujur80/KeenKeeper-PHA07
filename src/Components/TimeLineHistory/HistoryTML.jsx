import React from 'react';
import TextImg from '../../assets/text.png'
import CallImg from '../../assets/call.png'
import VideoImg from '../../assets/video.png'

const HistoryTML = ({ filterHistory }) => {
   
    if(filterHistory.length === 0){
        return <div className='text-center font-bold py-10 text-2xl'>No Data For For This Filter</div>
    }

    return (
        <div className='space-y-2 '>
            {
                filterHistory.map(friend => {
                    return (
                        <div className='border flex gap-3 bg-white p-3 rounded-xl'>
                            <div>
                                <img src={`${friend.type === "Text" ? TextImg : friend.type === "Call"? CallImg : VideoImg}`} alt={friend.type} />
                            </div>
                            <div>
                                <p className='text-zinc-600'><span>Text</span> with <span>Nmae</span> </p>
                                <p>{friend.date}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default HistoryTML;