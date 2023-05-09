import React, { useState } from "react";

const workoutA = [
    {
        name: "Incline Dumbbell Press",
        sets: 5,
        reps: 15,
        link: "8nNi8jbbUPE"
    },
    {
        name: "Flat Dumbbell Press",
        sets: 5,
        reps: 10,
        link: 'https://youtu.be/dGqI0Z5ul4k'
    },
    {
        name: "Incline Flys",
        sets: 4,
        reps: 12,
        link: 'https://youtu.be/beazxb8q-SA'
    },
    {
        name: "Pec Deck",
        sets: 4,
        reps: 12
    },
    {
        name: "Skull Crushers",
        sets: 4,
        reps: 15
    },
    {
        name: "Rope Extensions",
        sets: 5,
        reps: 12
    },
    {
        name: "Straight Bar Pushdowns",
        sets: 5,
        reps: 12
    },
    {
        name: "Rope Crunch",
        sets: 4,
        reps: 25
    },
    {
        name: "Hanging Knee Raise",
        sets: 4,
        reps: 25
    }
];

const workoutB = [
    {
        name: "Wide Grip Chins",
        sets: 4,
        reps: 12,
    },
    {
        name: "Wide Grip Rows",
        sets: 3,
        reps: 12,
    },
    {
        name: "Narrow Grip Pulldown",
        sets: 4,
        reps: 12,
    },
    {
        name: "Hyper Extensions",
        sets: 4,
        reps: 12,
    },
    {
        name: "Concentration Curls",
        sets: 4,
        reps: 12,
    },
    {
        name: "EZ Bar Curls",
        sets: 3,
        reps: 12,
    },
];

const workoutC = [
    {
        name: "Squats",
        sets: 4,
        reps: 12,
    },
    {
        name: "Leg Extensions",
        sets: 3,
        reps: 12,
    },
    {
        name: "Leg Curl",
        sets: 4,
        reps: 15,
    },
    {
        name: "Stiff Leg Deadlift",
        sets: 4,
        reps: 12,
    },
    {
        name: "Seated Calf Raise",
        sets: 4,
        reps: 12,
    },
    {
        name: "Dumbbell Shoulder Press",
        sets: 5,
        reps: 12,
    },
    {
        name: "Cable Lateral Raise",
        sets: 3,
        reps: 12,
    },
    {
        name: "Reverse Cable Fly",
        sets: 3,
        reps: 12,
    },
    {
        name: "Smith Machine Shrugs",
        sets: 4,
        reps: 15,
    },
    {
        name: "Rope Crunch",
        sets: 4,
        reps: 20,
    },
    {
        name: "Hanging Knee Raise",
        sets: 4,
        reps: 20,
    },
];

const workoutD = [
    {
        name: 'Incline Barbell Press',
        sets: 4,
        reps: 15,
    },
    {
        name: 'Flat Barbell Press',
        sets: 4,
        reps: 12,
    },
    {
        name: 'Flat Flys',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Cable Crossovers',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Reverse Grip Triceps Pushdown',
        sets: 4,
        reps: 15,
    },
    {
        name: 'Dumbbell Kickbacks',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Dumbbell Extension',
        sets: 3,
        reps: 12,
    },
    {
        name: 'Weighted Incline Crunches',
        sets: 4,
        reps: 25,
    },
    {
        name: 'Hip Thrusts',
        sets: 4,
        reps: 25,
    },
];

const workoutE = [
    {
        name: 'Wide Grip Pulldowns',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Bent Over Dumbbell Rows',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Good Mornings',
        reps: 12,
        sets: 3,
    },
    {
        name: 'One Arm Dumbbell Row',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Preacher Curl',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Dumbbell Curl',
        reps: 12,
        sets: 3,
    },
];

const workoutF = [
    {
        name: 'Leg Press',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Lunges',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Leg Curl',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Straight Leg Deadlift',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Standing Calf Raise',
        reps: 25,
        sets: 4,
    },
    {
        name: 'Smith Machine Shoulder Press',
        reps: 15,
        sets: 4,
    },
    {
        name: 'Dumbbell Lateral Raise',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Dumbbell Rear Delt Fly',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Upright Rows',
        reps: 12,
        sets: 3,
    },
    {
        name: 'Weighted Incline Crunches',
        reps: 25,
        sets: 4,
    },
    {
        name: 'Hip Thrusts',
        reps: 25,
        sets: 4,
    },
];

const workouts = [
    {
        id: 0,
        name: "Workout A - Chest and Triceps",
        exercises: workoutA,
    },
    {
        id: 1,
        name: "Workout A - Back and Biceps",
        exercises: workoutB,
    },
    {
        id: 2,
        name: "Workout A - Legs and Shoulders",
        exercises: workoutC,
    },
    {
        id: 3,
        name: "Workout B - Chest and Triceps",
        exercises: workoutD,
    },
    {
        id: 4,
        name: "Workout B - Back and Biceps",
        exercises: workoutE,
    },
    {
        id: 5,
        name: "Workout B - Legs and Shoulders",
        exercises: workoutF,
    },
];

export default function WorkoutTable({ workout }) {
    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Sets</th>
        //             <th>Reps</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {workouts[workout].exercises.map((exercise) => (
        //             <tr key={exercise.name}>
        //                 <td>{exercise.name}</td>
        //                 <td>{exercise.sets}</td>
        //                 <td>{exercise.reps}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
        <div>
            <h3>{workouts[workout].name}</h3>
            <div className="mb-5">
                <div className="overflow-x-auto">
                    <table className="min-w-360 table-auto">
                        <thead>
                            <tr>
                                {/* <th></th> */}
                                <th className="px-4 py-2">Exercise</th>
                                <th className="px-4 py-2">Sets</th>
                                <th className="px-4 py-2">Reps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workouts[workout].exercises.map((exercise) => (
                                <tr key={exercise.name}>
                                    {/* <td className="border px-4 py-2 w-1/12">

                                    </td> */}
                                    <td className="border px-4 py-2">
                                        {exercise.name}
                                    </td>
                                    <td className="border px-4 py-2">{exercise.sets}</td>
                                    <td className="border px-4 py-2">{exercise.reps}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}