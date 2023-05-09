import React from "react";
import classNames from "classnames";

const WeeklyCalendar = () => {
    const schedule = [
        { name: "Workout A - Chest and Triceps", tag: "bg-blue-500" },
        { name: "Workout A - Back and Biceps", tag: "bg-green-500" },
        { name: "Workout A - Legs and Shoulders", tag: "bg-yellow-500" },
        { name: "Rest", tag: "bg-gray-500" },
        { name: "Workout B - Chest and Triceps", tag: "bg-blue-500" },
        { name: "Workout B - Back and Biceps", tag: "bg-green-500" },
        { name: "Workout B - Legs and Shoulders", tag: "bg-yellow-500" },
        { name: "Rest", tag: "bg-gray-500" },
        { name: "Workout A - Chest and Triceps", tag: "bg-blue-500" },
    ];

    // const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"];
    const daysOfWeek = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9"];

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">6 Day Program Schedule</h2>
            <div className="overflow-x-auto">
                <table className="table-fixed">
                    <thead>
                        <tr>
                            {daysOfWeek.map((day) => (
                                <th key={day} className="w-1/9 border p-2">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {schedule.map((workout, index) => (
                                <td
                                    key={workout.name}
                                    className={classNames("w-1/9 border p-2 text-center", workout.tag)}
                                >
                                    {workout.name}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WeeklyCalendar;
