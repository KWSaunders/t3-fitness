import WeeklySchedule from './WeeklySchedule';
import WeeklyCalendar from './WeeklyCalendar';

export default function Schedule() {

    return (
        <div>
            <div className="text-gray-300 max-w-[72ch] leading-[1.5] mx-2 sm:mx-0 font-medium px-4 py-4 mb-0">
                <h1 className='text-center'>How it works</h1 >
                <p className="mt-1">
                    This workout uses a rotating schedule that works in terms of days on and days off instead of lining up specific workouts with different days of the week.
                </p>
                <p className="mt-1">
                    The recommended schedule is as follows:
                </p>
            </div>
            <WeeklySchedule />
        </div>

    );
}