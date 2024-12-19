import ScheduleCard from "./ScheduleCard.jsx";

const ScheduleSection = () => {
    return (
        <section>
            <div className="flex flex-col gap-2 p-4">
                <h1 className="text-2xl font-extrabold mb-5 text-900">
                    Event Schedule
                </h1>

                <div className="cards grid gap-6 md:grid-cols-3">
                    <ScheduleCard />
                </div>
                {/*    
    <div>
    <p>
    This year, you can expect the authors and core teams of the following libraries / projects:
    </p>
    <div></div>
    </div>*/}
            </div>
        </section>
    );
};
export default ScheduleSection;
