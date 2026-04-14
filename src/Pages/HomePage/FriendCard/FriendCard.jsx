import React from 'react';
import { Link} from 'react-router';

const FriendCard = ({friend}) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className='bg-white rounded-2xl p-5 flex flex-col items-center justify-center'>
                            <div className='w-25'>
                                <img className='w-20 h-20 rounded-full object-cover' src={friend.picture} alt="image" />
                            </div>
                            <div className='space-y-2 flex flex-col justify-center items-center'>
                                <h1>{friend.name}</h1>
                                <p>{friend.days_since_contact}d ago</p>
                                <div>
                                    {
                                        friend.tags.map(tg => <p className='badge badge-success badge-soft mr-1'>{tg}</p>)
                                    }
                                </div>
                                <div>
                                   <p className={`badge text-white ${friend.status === 'overdue'? 'badge-error': 'badge-success'}`} >{friend.status}</p>
                                </div>
                            </div>
                        </Link>
    );
};

export default FriendCard;