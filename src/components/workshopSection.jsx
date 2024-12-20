import { workshopDatas } from "../utils/WorkshopDatas.js";

const WorkshopSection = () => {
    return (
        <div
            className="workshopSection flex flex-col items-center
        justify-center"
        >
            <div className="w-full md:w-4/5">
                <div
                    className="flex flex-col items-center justify-center gap-5
                py-5"
                >
                    <h1 className="font-bold text-3xl text-900">
                        Workshops free & pro
                    </h1>
                    <p className="text-center px-2">
                        Do you imagine yourself at the helm of game-changing
                        projects? Then you’d better not miss our workshops.
                        Guided by expert instructors, you will boost your skills
                        and reveal new dimensions of React and JavaScript
                        problem-solving.
                    </p>
                </div>
                <div
                    className="workshop__ctas flex flex-col justify-center
                items-center md:flex-row justify-between gap-1"
                >
                    <div
                        className="border border-white w-full flex flex-col
                    items-center justify-center py-2 gap-2"
                    >
                        <button className="w-4/5 rounded-md p-4 bg-500 text-50 font-bold uppercase md:w-auto">
                            Pro Workshops
                        </button>
                        <p className="text-sm">Can be purchased separately.</p>
                    </div>
                    <div
                        className="border border-white w-full flex flex-col
                    items-center justify-center py-2 gap-2"
                    >
                        <button
                            className="w-4/5 rounded-md p-4 bg-500 text-50
                        font-bold uppercase md:w-auto"
                        >
                            6+ free Workshops
                        </button>
                        <p className="text-sm">
                            Are already included in the regular ticket price.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="py-5 px-2 flex flex-col gap-4 justify-center
            items-center my-6 border-2 border-100 divide-y-2 divide-100"
            >
                {workshopDatas.map(data => {
                    const workshopType = data.type === "paid";
                    return (
                        <div
                            key={data.id}
                            className="w-full  py-5 px-4 flex flex-col md:flex-row
                        md:items-center justify-between"
                        >
                            <div className="flex flex-col gap-5 md:w-3/5">
                                <div className="flex flex-col gap-7 pt-4">
                                    <p
                                        className={`w-fit font-bold rounded
                                        text-white
                                        p-2 ${
                                            workshopType
                                                ? "bg-yellow-500"
                                                : "bg-blue-500"
                                        }`}
                                    >
                                        {data.type === "paid"
                                            ? "WSH Pass"
                                            : "Free"}
                                    </p>
                                    <h1
                                        className="text-2xl font-semibold
                                    md:text-md"
                                    >
                                        {data?.title}
                                    </h1>
                                </div>
                                <div className="flex flex-col gap-2 md:flex-row">
                                    <p className="text-sm"> {data?.location}</p>
                                    <p className="text-sm">{data?.info}</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="flex items-center gap-5">
                                    <img
                                        src={data.img}
                                        alt={data.name}
                                        className="w-20 h-20 rounded"
                                    />
                                    <h1
                                        className="font-extrabold uppercase
                                    text-900"
                                    >
                                        {data.name}
                                    </h1>
                                </div>
                                <a
                                    href=""
                                    className={`block py-4 w-full flex
                                items-center justify-center text-md font-extrabold 
                               uppercase
                                text-white rounded my-5 md:text-sm
                                ${
                                    workshopType
                                        ? "bg-yellow-500"
                                        : "bg-blue-500"
                                }`}
                                >
                                    {workshopType
                                        ? "Get in-person workshop type"
                                        : "Get full ticket"}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default WorkshopSection;
