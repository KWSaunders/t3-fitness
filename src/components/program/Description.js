import React from "react";

export default function Description() {
    const description =
        "Doug's intense 6 day cutting routine hits each muscle group twice a week on a 3 days on, 1 day off schedule. Use this routine to burn fat and get ripped! Read workout notes for cardio schedule to go with this workout.";

    return (
        <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Program Description</h3>
            <p className="text-gray-400 leading-7">{description}</p>
            <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4">Program Notes</h3>
                <ul className="px-4 list-disc text-gray-400 leading-7">
                    <li>
                        This routine is performed on a 3 days on and 1 day off per week.
                    </li>
                    <li>
                        A thorough cardio warm up at start of each day, stretches and cardio cool down at the end of the training session.
                    </li>
                    <li>
                        Cardio is low intensity for up to an hour twice per day; First thing in the morning before breakfast and evening time, at least 2 hrs before bedtime.
                    </li>
                    <li>
                        30 Seconds rest only between sets
                    </li>
                    <li>
                        Rep timing of 2-1-2 performed on each exercise.
                    </li>
                </ul>
            </div>
        </div >
    );
}
