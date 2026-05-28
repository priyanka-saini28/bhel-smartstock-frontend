import MainLayout from "../components/layout/MainLayout";

import ForecastChart from "../components/analytics/ForecastChart";

import ForecastCards from "../components/analytics/ForecastCards";

import analyticsData from "../data/analyticsData";

const Analytics = () => {

  return (

    <MainLayout>

      <div className="min-h-screen pb-6">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#0f172a] mb-6">
          Analytics & Forecasting
        </h1>

        {/* Forecast Cards */}
        <ForecastCards data={analyticsData} />

        {/* Forecast Chart */}
        <ForecastChart data={analyticsData} />

      </div>

    </MainLayout>

  );

};

export default Analytics;