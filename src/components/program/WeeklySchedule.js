import React from "react";

export default function WeeklySchedule() {
    return (
        <table className="w-full border-collapse border border-gray-400">
            <thead>
                <tr>
                    <th className="p-2 border border-gray-400 text-center">Day</th>
                    <th className="p-2 border border-gray-400">Workout</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 1</td>
                    <td className="p-2 border border-gray-400 bg-blue-500 text-center">
                        Workout A - Chest and Triceps
                    </td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 2</td>
                    <td className="p-2 border border-gray-400 bg-green-500 text-center">
                        Workout A - Back and Biceps
                    </td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 3</td>
                    <td className="p-2 border border-gray-400 bg-yellow-500 text-center">
                        Workout A - Legs and Shoulders
                    </td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 4</td>
                    <td className="p-2 border border-gray-400 bg-gray-500 text-center">Rest</td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 5</td>
                    <td className="p-2 border border-gray-400 bg-blue-500 text-center">
                        Workout B - Chest and Triceps
                    </td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 6</td>
                    <td className="p-2 border border-gray-400 bg-green-500 text-center">
                        Workout B - Back and Biceps
                    </td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 7</td>
                    <td className="p-2 border border-gray-400 bg-yellow-500 text-center">
                        Workout B - Legs and Shoulders
                    </td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 8</td>
                    <td className="p-2 border border-gray-400 bg-gray-500 text-center">Rest</td>
                </tr>
                <tr className="border border-gray-400">
                    <td className="p-2 border border-gray-400 text-center">Day 9</td>
                    <td className="p-2 border border-gray-400 bg-blue-500 text-center">
                        Workout A - Chest and Triceps
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
