export default function Stats() {
  const metrics = [
    {
      value: "5000+",
      label: "Products",
    },
    {
      value: "$4M",
      label: "Worth of Orders Processed",
    },
    {
      value: "15+",
      label: "Categories",
    },
    {
      value: "8+",
      label: "Clients",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-[gray-50] px-4 py-12 mb-20 mt-24">
      <div className="bg-[#E3F8F8] py-16 px-8 sm:py-24 sm:px-12 rounded-2xl  relative max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold font-heading tracking-tight">
            Transforming Global Trade
            <br />
            with <span className="text-[#0095FF]">Impactful Results</span>
          </h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 transition-transform duration-300 ease-out group-hover:scale-110">
                {metric.value}
              </div>
              <div className="text-lg sm:text-xl text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#E3F8F8] opacity-10 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}

