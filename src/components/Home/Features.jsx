import { features } from "../../utils/data";

const Features = () => {
  return (
    <section  id="features"className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Powerful <span className="text-blue-600">Features</span> Designed for You
        </h2>
        <p className="text-gray-600 text-dashboard-text-h3">
          Unlock seamless experiences, privacy control, and blazing speed in one platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map(({ title, desc, icon: Icon }, i) => (
          <div
            key={i}
            className="cursor-pointer bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-dashboard-text-h3 font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-caption text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
