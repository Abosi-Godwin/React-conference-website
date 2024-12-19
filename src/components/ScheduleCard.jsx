import moment from "moment-timezone";

import ScheduleCardWrapper from "./ScheduleCardWrapper.jsx";
import CalendarBtns from "./CallBtns.jsx";
{
    /*
  to dos:
  1. create a pro and free workshop page for the last schedule card
  2. use moment.js to detect the time zone of a user and update the event
  schedule times => done
  */
}
const convertTimezone = (inputTime, inputTimezone) => {
    const myTimeZone = moment.tz.guess();
    const eventDate = moment.tz(inputTime, "h:mma", inputTimezone);
    const convertedDate = eventDate.clone().tz(myTimeZone);
    return convertedDate.format("h:mma z");
};

const scheduleInfos = {
    day1: {
        day: 1,
        date: "13",
        title: "Remote + in person day",
        desc: "Welcoming guests in Berlin and streaming online:",
        times: {
            inPerson: {
                time: convertTimezone("9am", "CET")
            },
            remote: {
                time: convertTimezone("1:20pm", "CET")
            }
        }
    },
    day2: {
        day: 2,
        date: "16",
        title: "Remote day",
        desc: "Streaming both tracks with speaker QnA's remotely.",
        times: {
            remote: {
                time: convertTimezone("4pm", "CET")
            }
        }
    }
};
const ScheduleCard = () => {
    return (
        <>
            <ScheduleCardWrapper bg="bg-50" text="text-900">
                <div className="flex gap-3">
                    <div className="bg-500 text-50 p-3 text-4xl rounded">
                        <h1 className="font-bold">
                            {scheduleInfos.day1.date}
                            <sup className="font-light text-md">.12</sup>
                        </h1>
                    </div>
                    <div className="font-bold text-xl">
                        <h1>{scheduleInfos.day1.title}</h1>
                    </div>
                </div>

                <div>
                    <p>{scheduleInfos.day1.desc}</p>
                    <p>
                        <span className="font-bold">In-Person</span> - 
                        {scheduleInfos.day1.times.inPerson.time}
                    </p>
                    <p>
                        <span className="font-bold">Remote</span> - 
                        {scheduleInfos.day1.times.remote.time}
                    </p>
                </div>
                <CalendarBtns eventDay="1" />
            </ScheduleCardWrapper>
            <ScheduleCardWrapper bg="bg-50" text="text-900">
                <div className="flex gap-3">
                    <div className="bg-500 text-50 p-3 text-4xl rounded">
                        <h1 className="font-bold">
                            {scheduleInfos.day2.date}
                            <sup className="font-light">.12</sup>
                        </h1>
                    </div>
                    <div className="font-bold text-xl">
                        <h1> {scheduleInfos.day2.title}</h1>
                    </div>
                </div>
                <div>
                    <p> {scheduleInfos.day2.desc}</p>
                    <p>
                        <span className="font-bold">Remote only</span> -
                        {scheduleInfos.day2.times.remote.time}
                    </p>
                </div>
                <CalendarBtns />
            </ScheduleCardWrapper>

            <ScheduleCardWrapper bg="bg-50" text="text-900">
                <div className="flex gap-3">
                    <div className="bg-500 text-50 p-3 text-4xl rounded">
                        <h1 className="font-bold">10+</h1>
                    </div>
                    <div className="font-bold text-xl">
                        <h1>Free Remote + Pro workshops</h1>
                    </div>
                </div>
                <div>
                    <p>
                        Learn new tech and figure out the best practices with
                        our expert trainers during 10+ Free & Pro workshops
                        organized before and after the main conf day.
                    </p>
                </div>
                <button className="p-2 rounded-md font-semibold bg-500 text-50
                uppercase text-xs font-bold">Learn more</button>
            </ScheduleCardWrapper>
        </>
    );
};

export default ScheduleCard;
