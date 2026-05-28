import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const ForecastChart = ({ data }) => {

  // Convert API structure into chart structure
  const chartData = data.timeline.map((month, index) => ({

    month,

    demand: data.forecasted_demand[index]

  }));

  return (

    <div className="bg-white p-4 rounded-xl shadow-md h-[280px]">

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-3">
        Forecasted Material Demand
      </h2>

      {/* Chart */}
      <div className="w-full h-[350px]">

        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="demand"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

};

export default ForecastChart;