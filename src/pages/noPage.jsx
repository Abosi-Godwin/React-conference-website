import { Link, useRouteError } from "react-router-dom";

const NoPage = () => {
    const error = useRouteError().statusText;
    return (
        <div
            className="h-screen w-screen flex items-center flex-col
        justify-center gap-4 overflow-hidden"
        >
            <h2 className="font-bold text-5xl">404</h2>
            <p className="text-red-400 text-xl font-bold text-center">
                <i>{error}</i> <br />
                😩😩
            </p>
            <Link
                to="/"
                className="p-3 rounded text-xl uppercase bg-blue-500
            text-white font-bold"
            >
                Go back Home
            </Link>
        </div>
    );
};

export default NoPage;
12;
