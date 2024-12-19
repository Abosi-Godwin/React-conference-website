import Speaker from "./Speaker.jsx";
import BrandSlider from "./brandsSlider.jsx";
import { speakersDatas, brandLogos } from "../assets/SpeakersDatas.js";

const Speakers = () => {
    return (
        <section className="py-10">
            <div className="px-4">
                <h1 className="font-extrabold text-3xl text-500 py-5">
                    Speakers
                </h1>
                <p>
                    At React Day Berlin, we gather top experts and rising stars
                    to explore cutting-edge topics in AI, React 19, and more.
                    Join us as they uncover the latest in Architecture, Design
                    Systems, and Performance on two dynamic stages.
                </p>
            </div>
            <div
                className="grid px-4 gap-4
                        md:grid-cols-2 py-5"
            >
                {speakersDatas.map(data => (
                    <Speaker data={data} key={data.id} />
                ))}
            </div>
            <BrandSlider datas={brandLogos} />
        </section>
    );
};
export default Speakers;
