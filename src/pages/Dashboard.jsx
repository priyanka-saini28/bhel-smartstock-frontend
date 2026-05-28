import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import InventoryPieChart from '../components/charts/InventoryPieChart';
import MonthlyUsageBarChart from '../components/charts/MonthlyUsageBarChart';
import NewsSection from '../components/sections/NewsSection';
import RecentActivity from '../components/sections/RecentActivity';

export default function Dashboard() {

  return (

    <MainLayout showHeader={true}>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 min-h-[220px]">

        <div className="lg:col-span-2 flex">
          <InventoryPieChart />
        </div>

        <div className="lg:col-span-3 flex h-[350px]">
          <MonthlyUsageBarChart />
        </div>

      </div>

      {/* News + Activity */}
      <div className="grid grid-cols-1 gap-4 pb-2 mt-4">

        <NewsSection />

        <RecentActivity />

      </div>

    </MainLayout>

  );
}