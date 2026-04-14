import React from 'react';
import { useParams } from 'react-router';
import useFriendsData from '../../Hook/useFriendsData';
import { ScaleLoader } from 'react-spinners';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegBell } from 'react-icons/fa';
import { MdOutlineTextsms } from 'react-icons/md';
import { GoDeviceCameraVideo } from 'react-icons/go';

const FriendDetails = () => {
    const { data, loading } = useFriendsData()
    const { id } = useParams()
    const friend = data.find(friend => friend.id == id);
    console.log(friend)

    if (loading) {
        return (<div className='flex items-center justify-center py-40'><ScaleLoader color='#016630' /></div>)
    }

    return (
        <div className='bg-sky-50 py-10'>
            <div className='max-w-[80%] mx-auto grid max-sm:grid-cols-1 grid-cols-12 gap-5'>
                
                    <div className='col-span-4 space-y-3'>
                        <div className='bg-white rounded-2xl  p-5 flex flex-col items-center justify-center'>
                            <div className='w-25'>
                                <img className='w-20 h-20 rounded-full object-cover' src={friend.picture} alt="image" />
                            </div>
                            <div className='space-y-2 flex flex-col justify-center items-center'>
                                <h1>{friend.name}</h1>
                                <div>
                                    <p className={`badge text-white ${friend.status === 'overdue' ? 'badge-error' : 'badge-success'}`} >{friend.status}</p>
                                </div>
                                <div>
                                    {
                                        friend.tags.map(tg => <p className='badge badge-success badge-soft mr-1'>{tg}</p>)
                                    }
                                </div>
                                <p className='text-zinc-500'>{friend.bio}</p>
                            </div>
                        </div>
                    <div className='flex flex-col space-y-2'>
                        <button className='btn w-full bg-white'><FaRegBell />Snooze 2 Weeks</button>
                        <button className='btn w-full bg-white'><FiArchive />Archive</button>
                        <button className='btn w-full bg-white text-red-400'><RiDeleteBin6Line />Delete</button>
                    </div>
                    </div>
                

                <div className='col-span-8 space-y-3'>
                    <div className='grid max-sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                        <div className='bg-white rounded-2xl flex items-center justify-center flex-col  py-7'>
                            <h1 className='font-bold'>{friend.days_since_contact}</h1>
                            <p className='text-zinc-500'>Days Since Contact</p>
                        </div>
                        <div className='bg-white rounded-2xl flex items-center justify-center flex-col  py-7'>
                            <h1 className='font-bold'>{friend.goal}</h1>
                            <p className='text-zinc-500'>Goal(Days)</p>
                        </div>
                        <div className='bg-white rounded-2xl flex items-center justify-center flex-col  py-7'>
                            <h1 className='font-bold'>{friend.next_due_date}</h1>
                            <p className='text-zinc-500'>Next Due</p>
                        </div>
                    </div>
                    <div className='bg-white w-full rounded-2xl p-5 py-6'>
                          <div className='flex items-center justify-between'>
                            <h1 className='font-[500]'>Relationship Goal</h1>
                            <button className='btn'>Edit</button>
                          </div>
                        <p>Connect Every:<span className='font-semibold'> {friend.goal} days</span> </p>
                    </div>

                    <div  className='max-sm:flex-row bg-white w-full rounded-2xl p-5 space-y-2'>
                        <h1 className='font-[500]'>Quick Check-in</h1>
                        <div className='flex flex-wrap justify-center gap-2'>
                           <div> <button className='btn w-50 h-20 flex flex-col items-center justify-center'><FiPhoneCall /> Call</button></div>
                           <div> <button className='btn w-50 h-20 flex flex-col items-center justify-center'><MdOutlineTextsms /> Text</button></div>
                           <div><button className='btn w-50 h-20 flex flex-col items-center justify-center'><GoDeviceCameraVideo /> Video</button></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FriendDetails;