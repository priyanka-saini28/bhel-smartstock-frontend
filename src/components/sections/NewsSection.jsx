import React from 'react';
import { newsData } from '../../data/newsData';

export default function NewsSection() {
  return (
    <div className="bg-white rounded-xl border border-gray-200/80 shadow-sm flex flex-col overflow-hidden h-full">
      <div className="flex justify-between items-center px-4 py-2.5 border-b border-gray-100 bg-gray-50/70 shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-base text-[#0a4fa4]">📰</span>
          <h3 className="text-[#0a4fa4] font-bold text-sm">News</h3>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-xs font-semibold">View All</button>
      </div>
      <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
        {newsData.map((news) => (
          <div key={news.id} className="flex justify-between items-center px-4 py-2.5 hover:bg-gray-50/40 transition-colors">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
              <p className="text-gray-700 text-xs font-medium truncate">{news.text}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-[11px] shrink-0 pl-3">
              <span>📅</span>
              <span>{news.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}