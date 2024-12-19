import { useState } from "react";

import { google, outlook, office365, yahoo, ics } from "calendar-link";

let urls;
const CalendarBtns = ({eventDay}) => {
    const [openCopyBtn, setOpenCopyBtn] = useState(false);

    function activateCallBtns(day) {
        setOpenCopyBtn(!openCopyBtn);
        const event = {
            title: `React Day Berling || Day ${day} | Remote`,
            description: "Be there!",
            start: "2024-12-13 18:00:00 +0100",
            duration: [3, "hour"]
        };

        // Then fetch the link
        const googleUrl = google(event);
        const outLookUrl = outlook(event);
        const officeUrl = office365(event);
        const yahooUrl = yahoo(event);
        const appleUrl = ics(event);

        urls = [
            { name: "Google", link: googleUrl },
            { name: "Outlook", link: outLookUrl },
            { name: "Office", link: officeUrl },
            { name: "Yahoo", link: yahooUrl }
        ];
    }

    return (
        <div className="flex items-center flex-col gap-3 justify-center">
            <button
                className="p-2 rounded-md font-semibold bg-500 text-50 uppercase text-xs font-bold"
                onClick={() => activateCallBtns(eventDay)}
            >
                {openCopyBtn ? "cancel" : "add to calendar"}
            </button>
            {openCopyBtn && (
                <div
                    className="flex items-center
                            justify-between gap-2 p-2 bg-700 rounded-md max-w-4/5"
                >
                    {urls.map(url => (
                        <a
                            href={url.link}
                            className="text-200 p-1 border-2 border-200 rounded text-sm"
                            key={url.name}
                            target="_blank"
                        >
                            {url.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CalendarBtns;
