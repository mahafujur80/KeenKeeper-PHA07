import React from 'react';
import { FiActivity } from 'react-icons/fi';

const EmptyStatsMSG = () => {
    return (
        <div className="flex flex-col items-center justify-center  text-center bg-base-100 rounded-2xl  p-6">
            <div className="bg-gray-100 p-4 rounded-full mb-4">
                <FiActivity className="text-3xl text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-700">
                No Activity Yet
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
                You haven’t made any calls, messages, or video interactions yet.
            </p>
            <span className="text-xs text-gray-300 mt-3">
                Start interacting to see your stats here 🚀
            </span>
        </div>
    );
};

export default EmptyStatsMSG;