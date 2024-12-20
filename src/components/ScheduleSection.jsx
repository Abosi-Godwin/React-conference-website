import ScheduleCard from "./ScheduleCard.jsx";

const ScheduleSection = () => {
    return (
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-2xl font-extrabold mb-5 text-900">
                    Event Schedule
                </h1>

                <div className="cards grid gap-6 md:grid-cols-3">
                    <ScheduleCard />
                </div>
            </div>
    );
};
export default ScheduleSection;
