import { TwitterTweetEmbed } from "react-twitter-embed";

const tweetIds = [
    "1733040154661515680",
    "1733036805887246354",
    "1733059970806005915",
    "1733063268762067394",
    "1733130988853535064",
    "1733153127216324870"
];

function Testimonials() {
    return (
        <div
            className="flex items-center justify-center flex-col py-5 md:w-4/5
       md:m-auto"
        >
            <div className="w-full">
                <h2 className="text-3xl p-4 md:text-center md:text-4xl font-bold text-900">
                    We're no strangers {<br />} To Berlin's scene
                </h2>
            </div>
            <div className="w-full grid grid-cols-1 gap-2 p-5 md:grid-cols-2 ">
                {tweetIds.map(tweetId => (
                    <h1>{tweetId}</h1>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
