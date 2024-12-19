import { Link } from "react-router-dom";

const Speaker = ({ data }) => {
    const haveWorkshop = data.hasOwnProperty("workshop");

    return (
        <Link to={"/speaker/" + data.id}>
            <div
                key={data.id}
                className="py-2 px-4 border-2 border-50 rounded-xl"
            >
                <p
                    className="p-2 text-xs float-right rounded bg-700 w-fit text-200"
                >
                    {data.topic}
                </p>
                <div className="pt-9">
                    <img
                        src={data.img}
                        alt={data.name}
                        className="block rounded-xl py-2"
                    />
                    <div className="py-3">
                        <h1 className="font-extrabold text-500">{data.name}</h1>
                        <h1 className="font-light text-sm text-500">
                            {data.occupation}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-2 pb-2">
                        <h1>
                            <span className="font-bold text-500">Talk:</span>{" "}
                            {data?.title.name}
                        </h1>
                        {haveWorkshop && (
                            <h1>
                                <span className="font-bold text-500">
                                    Workshop:
                                </span>
                                {" " + data.workshop}
                            </h1>
                        )}
                    </div>
                    <div className="py-3">
                        <p className="tracking-wide">
                            {data.title.description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
export default Speaker;
