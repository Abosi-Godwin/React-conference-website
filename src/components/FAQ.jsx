import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export const Faq = ({ questionObject }) => {
    const [openAnswer, setOpenAnswer] = useState(true);

    const handleToggle = () => {
        setOpenAnswer(prev => !prev);
    };

    return (
        <div className="p-3 bg-50 m-4 rounded-md">
            <div className="flex gap-4 py-2">
                <div className="question">
                    <h1 className="font-semibold">{questionObject.question}</h1>
                </div>
                <div
                    className="toggle bg-800 h-fit text-2xl text-50 rounded-md"
                    onClick={handleToggle}
                >
                    {openAnswer ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            {openAnswer && (
                <div className="bg-white p-2 rounded-md">
                    <p>{questionObject.answer}</p>
                </div>
            )}
        </div>
    );
};
