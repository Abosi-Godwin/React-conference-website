import { useRef, useEffect } from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaTiktok,
    FaYoutube
} from "react-icons/fa6";
const Location = () => {
    const mapEl = useRef(null);
    const mapInstance = useRef(null); // Store the map instance

    useEffect(() => {
        if (!mapEl.current) return;

        // Check if the map is already initialized
        if (mapInstance.current) {
            mapInstance.current.remove(); // Destroy the previous map
        }

        // Initialize the map
        const lat = 52.508;
        const long = 13.381;
        const myMap = L.map(mapEl.current, {
            dragging: true,
            attributionControl: false,
            closePopupOnClick: false
        }).setView([lat, long], 16);

        // Add tile layer
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

        // Add marker
        L.marker([lat, long])
            .addTo(myMap)
            .bindPopup(`The physical location of Handytech on the map`)
            .openPopup();

        // Save the map instance
        mapInstance.current = myMap;

        // Cleanup function
        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove(); // Clean up on unmount
                mapInstance.current = null; // Reset the map instance
            }
        };
    }, []);
    return (
        <div className="p-6 w-screen">
            <h1 className="font-bold text-3xl text-900">Location</h1>
            <div className="md:w-full flex flex-col md:flex-row gap-10 justify-between">
                <div className="md:w-2/4">
                    <div className="flex flex-col gap-4 py-4">
                        <p className="">
                            With the ever-growing JS ecosystem, it’s only
                            appropriate that we are hosting React Day Berlin in
                            Kosmos, the amazing Space Age theatre from the
                            1960s. It is situated in the hip neighborhood of
                            Friedrichshain full of great restaurants, bars,
                            clubs and little shops, and the building was built
                            with unconventional visionaries in mind.
                        </p>
                        <div className="flex w-fit pt-4 gap-4 text-xl text-900">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaXTwitter />
                            <FaTiktok />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className="z-0 md:w-2/4">
                    <h1 className="text-900 pb-4">
                        <span className="font-extrabold text-md">Venue:</span>{" "}
                        KOSMOS Karl-Marx-Allee 131A, 10243 Berlin
                    </h1>
                    <div ref={mapEl} className="h-60 max-h-60 rounded-md"></div>
                </div>
            </div>
        </div>
    );
};

export default Location;
