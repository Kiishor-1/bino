import { explorableFeatures } from "../../utils/data";

const Explore = () => {
    return (
        <section id="enterprise" className="bg-white py-20 w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-6">
                Explore more features in <span className="text-blue-600">Bino</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                Unlock Bino’s full potential with a wide set of tools for productivity and creativity
            </p>

            <div className="space-y-20">
                {explorableFeatures.map((feature, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col md:flex-row ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                            } items-center gap-10`}
                    >
                        {/* Text Block */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h3 className="text-dashboard-text-h2 font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                Learn more
                            </button>
                        </div>

                        {/* Image Placeholder */}
                        <div className="md:w-1/2 flex justify-center relative">
                            <div className="hover:scale-105 transition duration-200 rounded-[1rem] bg-gradient-to-b from-white to-indigo-100 border shadow-md flex items-center justify-center text-gray-500 text-caption">
                                <img className={`rounded-[1rem] border shadow-lg ${idx === 1 ? 'w-[500px]':'h-[500px]'}`} src={feature.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Explore;
