import Interface from '../../assets/bino.png'
const Hero = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 overflow-hidden">
            <main className="relative h-[calc(100vh_-_70px)] flex flex-col items-center justify-center">
                {/* Floating icons */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-6 left-8 animate-bounce text-blue-500 text-dashboard-text-h2">✨</div>
                    <div className="absolute top-12 right-12 animate-bounce text-yellow-400 text-dashboard-text-h2">⚡</div>
                    <div className="absolute bottom-10 left-16 animate-bounce text-pink-400 text-dashboard-text-h2">💡</div>
                    <div className="absolute bottom-6 right-20 animate-bounce text-green-400 text-dashboard-text-h2">🚀</div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 text-center max-w-4xl mx-auto">
                    <h1 className="flex flex-col items-center gap-3 text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Discover solutions. 
                        <span>Get inspired.</span>
                        <span className="text-blue-600">Boost your productivity.</span>
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto text-dashboard-text-h3">
                        Unlock tools, tips, and insights designed to keep you efficient, creative, and ahead of the curve with AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200">
                            Start Free
                        </button>
                        <button className="bg-white text-blue-600 hover:text-blue-800 border border-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200">
                            Watch Video
                        </button>
                    </div>
                </div>
            </main>
            <div className="p-4">
                <img className='shadow-lg sm:w-[95%] md:w-[90%] lg:w-[60%] mx-auto rounded-xl' src={Interface} alt="" />
            </div>

        </section>

    );
};

export default Hero;
