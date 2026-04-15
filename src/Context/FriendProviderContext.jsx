import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendsData = createContext()

const FriendProviderContext = ({children}) => {
const [history, setHistory] = useState([])

const handleCallBtn = (friend)=>{
    const newObj = {
        name: friend.name,
        type: 'Call',
        date: new Date().toLocaleString(),
        time: new Date().toISOString()
    }
    const newHistory = [...history, newObj];
    setHistory(newHistory);
    toast.success(`${friend.name} Call Success`)
}
const handleTextBtn = (friend)=>{
    const newObj = {
        name: friend.name,
        type: 'Text',
        date: new Date().toLocaleString(),
        time: new Date().toISOString()
    }
    const newHistory = [...history, newObj];
    setHistory(newHistory);
    toast.success(`${friend.name} Text Success`)
}
const handleVideoBtn = (friend)=>{
    const newObj = {
        name: friend.name,
        type: 'Video',
        date: new Date().toLocaleString(),
        time: new Date().toISOString()
    }
    const newHistory = [...history, newObj];
    setHistory(newHistory);
    toast.success(`${friend.name} Video Call Success`)
}


    const data = {
        handleCallBtn,
        handleVideoBtn,
        handleTextBtn,
        history
    }




    return (
        <FriendsData.Provider value={data}>
           {
            children
           }
        </FriendsData.Provider>
    );
};

export default FriendProviderContext;