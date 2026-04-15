import { FiClock } from "react-icons/fi";

const EmptyTimelineMessage = () => {
    return (
        <div className="bg-white rounded-xl flex flex-col items-center justify-center h-[40vh] text-center">
            <FiClock className="text-5xl text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600">
                No History Yet
            </h2>
            <p className="text-gray-400 mt-2">
                Start calling or messaging to see activity here.
            </p>
        </div>
    );
};

export default EmptyTimelineMessage;