import React from 'react';

export default function HelpButton() {
  return (
    <button className="fixed bottom-5 right-5 bg-[#0a4fa4] text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all flex items-center gap-1.5 font-medium text-sm z-50">
      <span className="text-base">❓</span>
      Help
    </button>
  );
}