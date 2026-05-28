const ForecastCards = ({ data }) => {

  // Calculations
  const highestDemand = Math.max(...data.forecasted_demand);

  const averageDemand =
    Math.round(
      data.forecasted_demand.reduce((a, b) => a + b, 0) /
      data.forecasted_demand.length
    );

  const trend =
    data.forecasted_demand[2] >
    data.forecasted_demand[0]
      ? "Increasing"
      : "Stable";

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {/* Highest Demand */}
      <div className="bg-white p-5 rounded-xl shadow-md">

        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Peak Forecast
        </h3>

        <p className="text-4xl font-bold text-blue-600">
          {highestDemand}
        </p>

        <span className="text-gray-500">
          Units
        </span>

      </div>

      {/* Average Demand */}
      <div className="bg-white p-5 rounded-xl shadow-md">

        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Average Demand
        </h3>

        <p className="text-4xl font-bold text-green-600">
          {averageDemand}
        </p>

        <span className="text-gray-500">
          Units
        </span>

      </div>

      {/* Trend */}
      <div className="bg-white p-5 rounded-xl shadow-md">

        <h3 className="text-lg font-semibold text-gray-600 mb-2">
          Consumption Trend
        </h3>

        <p className="text-3xl font-bold text-orange-500">
          {trend}
        </p>

        <span className="text-gray-500">
          Based on forecast pattern
        </span>

      </div>

    </div>

  );

};

export default ForecastCards;