import { useState } from "react";

import { faqDatas } from "../utils/faqDatas.js";
import { Faq } from "./FAQ.jsx";
const filterOptions = faqDatas.map(data => data.category);

const Faqs = () => {
    const [selectedCategory, setSelectedCategory] =
        useState("General Questions");

    const handleCategoryChange = category => {
        setSelectedCategory(category);
    };
    const questionIndex = filterOptions.findIndex(
        option => option === selectedCategory
    );

    return (
        <div className="p-3">
            <div className="py-4">
                <h1 className="text-md font-bold capitalize">
                    Frequently asked questions
                </h1>
                <p>
                    Find answers to your questions about ReactConf Berlin 2024
                </p>
            </div>
            <div>
                <h1 className="font-semibold">Filter related questions:</h1>
                <ul
                    className="flex wrap gap-3 overflow-auto no-scrollbar p-3 border-2
                border-500 rounded-md scrool"
                >
                    {filterOptions.map(option => (
                        <li
                            className={`p-2 rounded-md whitespace-nowrap
                            
                        ${
                            option === selectedCategory
                                ? "bg-400 text-50"
                                : "bg-50"
                        }`}
                            onClick={() => handleCategoryChange(option)}
                            key={option}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                {faqDatas[questionIndex].questions.map(
                    (questionObject, index) => (
                        <Faq questionObject={questionObject} key={index} />
                    )
                )}
            </div>
        </div>
    );
};
export default Faqs;
