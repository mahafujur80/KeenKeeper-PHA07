import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const Stats = () => {

    const data = [
  { name: 'Group A', value: 400, fill: '#244d3f' },
  { name: 'Group B', value: 300, fill: '#7f36f5' },
  { name: 'Group C', value: 300, fill: '#37a163' },
];

    return (
        <div className='bg-sky-50'>
            <div className='max-w-[80%] mx-auto py-10 space-y-3'>
                <h1 className='text-3xl font-bold'>Friendship Analytics</h1>
                <div className='bg-white rounded-xl p-5 flex justify-center'>
                   
                   <h2 className='font-bold'>By Interaction Type</h2>

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
                        <Legend/>
                        <Tooltip/>
                    </PieChart>
              
                </div>
            </div>
        </div>
    );
};

export default Stats;