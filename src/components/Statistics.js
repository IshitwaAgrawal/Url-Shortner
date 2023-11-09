// components/Statistics.js

const Statistics = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Usage Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Statistic 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Links Shortened</h3>
            <p className="text-3xl font-bold text-blue-500 mb-4">1,234</p>
          </div>

          {/* Statistic 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Clicks on Shortened Links</h3>
            <p className="text-3xl font-bold text-blue-500 mb-4">5,678</p>
          </div>

          {/* Statistic 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">User Registrations</h3>
            <p className="text-3xl font-bold text-blue-500 mb-4">789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
