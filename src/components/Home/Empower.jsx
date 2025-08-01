import { benefits } from "../../utils/data";

const Empower = () => {
  return (
    <section id="resources" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Empower Your <span className="text-blue-600">Workflow</span>
        </h2>
        <p className="text-gray-600 text-dashboard-text-h3">
          Bino makes your daily tasks faster, smarter, and simpler.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-dashboard-text-h3 font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600 text-caption">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Empower;
