import { useParams, Link } from "react-router-dom";
import { speakersDatas } from "../assets/SpeakersDatas.js";
import { FaXTwitter, FaGithub, FaGlobe } from "react-icons/fa6";
const gitIcon = "../src/assets/imgIcons/gitnation.png";

const Speaker = () => {
    const userId = useParams();
    const user = speakersDatas.find(speakerId => speakerId.id === userId.id);
    console.log(user);
    return (
        <div className="p-6 flex flex-col gap-2">
            <div>
                <img src={`.${user.img}`} alt={user.name} className="pb-4" />
                <h1 className="font-bold text-xl">{user.name}</h1>
                <h1 className="text-sm">{user.occupation}</h1>
                <br />
                <p className="italic font-semibold">
                    Speech specialized on: {" " + user.topic}
                </p>
                <p className="py-4">{user.desc}</p>
            </div>
            <div className="bg-500 p-3 text-50">
                <h1 className="text-2xl font-bold">Socials</h1>
                <p>
                    You can check out and communicate with{" "}
                    {user.name.split(" ")[0]} on the social media handles below
                    ::⁠-⁠)
                </p>
                <br />
                <ul className="flex gap-4 items-center justify-start">
                    {user.socials.map(social => {
                        return (
                            <SocialIcon
                                socialPlatform={social}
                                key={social.site}
                            />
                        );
                    })}
                </ul>
            </div>
            <div className="py-4">{user.fullBio}</div>

            <div className="flex items-center justify-center">
                <Link
                    to="/"
                    className="p-3 font-bold uppercase bg-500 text-50 rounded"
                >
                    Back to the list
                </Link>
            </div>
        </div>
    );
};

const GitIconComp = () => {
    return (
        <div className="w-6 h-6">
            <img src={gitIcon} className="w-full max-w-full" />
        </div>
    );
};
const SocialIcon = ({ socialPlatform }) => {
    switch (socialPlatform.site) {
        case "github":
            return (
                <a href={socialPlatform.url} target="_blank">
                    <FaGithub />
                </a>
            );
        case "x":
            return (
                <a href={socialPlatform.url} target="_blank">
                    <FaXTwitter />
                </a>
            );
        case "web":
            return (
                <a href={socialPlatform.url} target="_blank">
                    <FaGlobe />
                </a>
            );
        case "gitnation":
            return (
                <a href={socialPlatform.url} target="_blank">
                    <GitIconComp />
                </a>
            );
        default:
            return null; // Handle unsupported cases
    }
};
export default Speaker;
