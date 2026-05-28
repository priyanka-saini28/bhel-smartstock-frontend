import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import RecentSIVTable from "../components/tables/RecentSIVTable";

import initialRequests from "../data/sivRequests";

const PendingSIV = () => {

  const [sivRequests, setSivRequests] =
    useState(initialRequests);

  // Approve
  const handleApprove = (id) => {

    const updatedRequests = sivRequests.map((item) =>

      item.siv_id === id
        ? { ...item, status: "Approved" }
        : item

    );

    setSivRequests(updatedRequests);

  };

  // Reject
  const handleReject = (id) => {

    const updatedRequests = sivRequests.map((item) =>

      item.siv_id === id
        ? { ...item, status: "Rejected" }
        : item

    );

    setSivRequests(updatedRequests);

  };

  return (

    <MainLayout>

      <div className="min-h-screen pb-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#0f172a] mb-8">
          Pending SIV Requests
        </h1>

        {/* Table */}
        <RecentSIVTable
          requests={sivRequests}
          onApprove={handleApprove}
          onReject={handleReject}
        />

      </div>

    </MainLayout>

  );

};

export default PendingSIV;