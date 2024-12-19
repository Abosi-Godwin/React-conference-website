const BrandSlider = ({ datas }) => {
    return (
        <div className="">
            <p className="p-4 font-bold text-50 bg-700 p-5">
                Our speakers are highly skilled individuals who contributes to
                open source projects, works independently, manage and maintain
                the tools listed below.
            </p>
            <div className="logos">
                <div className="logos-slide">
                    {datas.map(data => (
                        <LogoSlide data={data} key={data.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const LogoSlide = ({ data }) => {
    return (
        <div className="inline-block">
            <div
                className="flex flex-col gap-3 items-center
        justify-center"
            >
                <img
                    src={data.img}
                    alt={data.name}
                    className="w-14 h-14 mx-4"
                />
                <h1 className="font-bold text-sm uppercase">
                    {data.name}
                </h1>
            </div>
        </div>
    );
};

export default BrandSlider;
