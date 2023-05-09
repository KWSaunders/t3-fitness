
export default function Summary() {
    return (
        <div className="font-roboto-regular font-normal leading-6 text-base text-gray-400">
            {/* <img className="w-100 h-80 mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0owD7L2EWMIA8RAR2vGF2n_IEZZsF4fxQcmOqpJcBTA&s" alt="Program Image" /> */}
            <ul className="border-2 border-blue-500 bg-gray-800 mb-8 p-4 rounded-md border-t-4">
                <h3 className="mb-2 text-lg font-bold text-white">Program Summary</h3>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Main Goal</span>
                    <span className="w-3/5 text-center">Lose Fat, Gain Muscle</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Workout Type</span>
                    <span className="w-3/5 text-center">Split</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Training Level</span>
                    <span className="w-3/5 text-center">Advanced</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Program Duration</span>
                    <span className="w-3/5 text-center">16 Weeks</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Days Per Week</span>
                    <span className="w-3/5 text-center">6</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Estimated Time Per Workout</span>
                    <span className="w-3/5 text-center">75 Minutes</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Equipment Required</span>
                    <span className="w-3/5 text-center">Barbell, Bodyweight, Cables, Dumbbells, EZ Bar, Machines</span>
                </li>
                <li className="border-b border-gray-600 py-2 flex">
                    <span className="w-2/5 float-left font-semibold text-white">Target Gender</span>
                    <span className="w-3/5 text-center">Male & Female</span>
                </li>
            </ul>
        </div>
    );
}
