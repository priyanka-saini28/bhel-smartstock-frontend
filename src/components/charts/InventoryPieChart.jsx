import React from 'react';

export default function InventoryPieChart() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm flex flex-col flex-1 h-full justify-between">
      <h3 className="text-[#0a4fa4] font-bold text-sm tracking-wide">Inventory Status</h3>
      
      <div className="flex items-center justify-between gap-2 my-auto">
        {/* SVG Donut Chart Container */}
        <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
            {/* Available (60%) - Blue */}
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#1560bd" strokeWidth="4.2" strokeDasharray="60 40" strokeDashoffset="0" />
            {/* Low Stock (25%) - Yellow */}
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="4.2" strokeDasharray="25 75" strokeDashoffset="-60" />
            {/* Out of Stock (15%) - Red */}
            <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ef4444" strokeWidth="4.2" strokeDasharray="15 85" strokeDashoffset="-85" />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-lg">📦</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight">Inventory</span>
          </div>
        </div>

        {/* Legends */}
        <div className="flex-1 space-y-2 pl-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1560bd]"></span>
              <span className="text-gray-600 font-medium">Available</span>
            </div>
            <span className="font-bold text-gray-800">60%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
              <span className="text-gray-600 font-medium">Low Stock</span>
            </div>
            <span className="font-bold text-gray-800">25%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
              <span className="text-gray-600 font-medium">Out of Stock</span>
            </div>
            <span className="font-bold text-gray-800">15%</span>
          </div>
        </div>
      </div>
    </div>
  );
}