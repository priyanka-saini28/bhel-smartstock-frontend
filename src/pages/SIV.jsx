import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import SIVForm from "../components/forms/SIVForm";
import RecentSIVTable from "../components/tables/RecentSIVTable";

import initialRequests from "../data/sivRequests";

const SIV = () => {

  const [sivRequests, setSivRequests] = useState(initialRequests);

  // Approve Function
  const handleApprove = (id) => {

    const updatedRequests = sivRequests.map((item) =>

      item.siv_id === id
        ? { ...item, status: "Approved" }
        : item

    );

    setSivRequests(updatedRequests);

  };

  // Reject Function
  const handleReject = (id) => {

    const updatedRequests = sivRequests.map((item) =>

      item.siv_id === id
        ? { ...item, status: "Rejected" }
        : item

    );

    setSivRequests(updatedRequests);

  };

  // Add New Request
  const addNewRequest = (newRequest) => {

    setSivRequests([newRequest, ...sivRequests]);

  };

  return (

    <MainLayout>

      <div className="min-h-screen pb-20">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#0f172a] mb-10">
          Store Issue Voucher (SIV)
        </h1>

        {/* Form */}
        <div className="mb-10">
          <SIVForm onAddRequest={addNewRequest} />
        </div>

        {/* Table */}

      </div>

    </MainLayout>

  );
};

export default SIV;