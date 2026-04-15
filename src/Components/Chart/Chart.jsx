import React, { useContext } from 'react';
import { FriendsData } from '../../Context/FriendProviderContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Chart = () => {
    const { history } = useContext(FriendsData)

    const Text = history.filter(friend => friend.type === "Text")
    const Call = history.filter(friend => friend.type === "Call")
    const Video = history.filter(friend => friend.type === "Video")

    const data = [
        { name: 'Text', value: Text.length, fill: '#244d3f' },
        { name: 'Call', value: Call.length, fill: '#7f36f5' },
        { name: 'Video', value: Video.length, fill: '#37a163' },
    ];


    return (
        <div>
            <h2 className='text-[#244d3f] font-semibold'>By Interaction Type</h2>
            <div className='flex flex-col items-center justify-center'>
                <PieChart style={{ width: '80%', maxWidth: '80%', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    <Legend />
                    <Tooltip />
                </PieChart>

            </div>
        </div>
    );
};

export default Chart;