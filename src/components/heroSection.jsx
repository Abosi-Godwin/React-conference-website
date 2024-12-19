import { useState, useEffect } from "react";

const TARGETDATE = new Date("Dec 31, 2024, 00:00:00").getTime();

const HeroSection = () => {
    const [eventDateCountDown, setEventDateCountDown] = useState();
    useEffect(() => {
        setInterval(() => {
            const now = new Date().getTime();
            const gap = TARGETDATE - now;
            const day = 1000 * 60 * 60 * 24;
            const theDate = Math.floor(gap / day);
            setEventDateCountDown(theDate);
        }, 1000);
    }, [eventDateCountDown]);

    return (
        <div
            className="bg-hero-pattern bg-gray-800 bg-center bg-cover bg-blend-overlay
            gl-bg-blend-darken h-dvh w-full justify-center items-center pt-20"
        >
            <div className=" flex flex-col items-center text-white pt-16 px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    React Conference 2024 – Berlin
                </h1>
                <p className="text-lg md:text-2xl mt-4">
                    Join the brightest minds in React development this December.
                </p>
                <div className="mt-6 text-sm md:text-lg">
                    <span>📅 December 2024</span> &nbsp;|&nbsp;{" "}
                    <span>📍 Berlin, Germany</span>
                </div>
                <div className="mt-8 flex flex-col justify-center gap-4 space-x-4 md:flex-row">
                    <a
                        href="#register"
                        className="bg-500 hover:bg-600 text-white px-6 py-3
                        rounded-lg text-lg font-semibold uppercase"
                    >
                        Reserve your spot
                    </a>
                    <a
                        href="#speakers"
                        className="text-blue-300 hover:text-blue-400 underline
                        text-lg font-semibold"
                    >
                        Attend Remotely
                    </a>
                </div>
                <div className="mt-10 text-lg md:text-xl">
                    <p>
                        Only{" "}
                        <span
                            className="font-bold
                        text-blue-300"
                        >
                            {`${eventDateCountDown} ${
                                eventDateCountDown <= 1 ? "day" : "days"
                            }`}
                        </span>{" "}
                        left until the conference!
                    </p>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
