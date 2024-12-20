import { Link } from "react-router-dom";

const eventInfos = [
    {
        img: "/imgIcons/employee.png",
        alt: "Speakers Icon",
        title: "Inspiring Speakers",
        desc: "Hear from thought leaders and top developers from the React ecosystem."
    },

    {
        img: "/imgIcons/workshop.png",
        alt: "Workshops Icon",
        title: "Hands-on Workshops",
        desc: " Participate in interactive sessions and deepen your practical React skills."
    },
    {
        img: "/imgIcons/networking.png",
        alt: "Networking Icon",
        title: "Networking Opportunities",
        desc: "Connect with peers, mentors, and potential collaborators from around the globe."
    },
    {
        img: "/imgIcons/advance-technology.png",
        alt: "Trends Icon",
        title: "Cutting-Edge Topics",
        desc: "Discover the latest trends, tools, and best practices in React development."
    }
];

const AboutEvent = () => {
    return (
        <section id="about" className="py-20">
            <div
                className="container mx-auto max-w-5xl text-center
            font-montserrat"
            >
                <div className="px-6">
                    <h2 className="text-4xl font-bold mb-4">
                        About React Conference 2024
                    </h2>
                    <p className="text-lg mb-8">
                        Bringing together the best of the React community for an
                        unforgettable experience in Berlin.
                    </p>

                    <p className="text-md md:text-lg mb-12 max-w-3xl mx-auto">
                        React Conference 2024 is your gateway to exploring
                        cutting-edge advancements in React, networking with
                        industry experts, and gaining insights from renowned
                        developers around the world. Join us for a two-day event
                        packed with inspiring talks, hands-on workshops, and
                        unparalleled learning opportunities.
                    </p>
                </div>
                <div
                    className="grid md:grid-cols-2 lg:grid-cols-4 px-6 gap-8
                mb-12 md:px-12"
                >
                    {eventInfos.map(info => {
                        return (
                            <div
                                className="flex gap-2 flex-col items-center
                            border border-gray-900 p-4 rounded-md" key={info.alt}
                            >
                                <img
                                    src={info.img}
                                    alt={info.alt}
                                    className="w-16 h-16 mb-4"
                                />
                                <h3
                                    className="text-xl
                                font-semibold"
                                >
                                    {info.title}
                                </h3>
                                <p
                                    className="text-sm text-gray-600
                                text-center"
                                >
                                    {info.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <Link
                    to="/about"
                    className="bg-500 text-md hover:bg-600 text-white px-6
                    py-3 rounded-lg md:text-lg font-semibold"
                >
                    Learn More About the Conference
                </Link>
            </div>
        </section>
    );
};

export default AboutEvent;
