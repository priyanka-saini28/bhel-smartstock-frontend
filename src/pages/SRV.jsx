import { useState } from "react";

import MainLayout from "../components/layout/MainLayout";

import SRVForm from "../components/forms/SRVForm";

import RecentSRVTable from "../components/tables/RecentSRVTable";

import initialRecords from "../data/srvRecords";

const SRV = () => {

  const [srvRecords, setSrvRecords] = useState(initialRecords);

  // Add New SRV Record
  const addNewSRV = (newSRV) => {

    setSrvRecords([newSRV, ...srvRecords]);

  };

  return (

    <MainLayout>

      <div className="min-h-screen pb-20">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-[#0f172a] mb-10">
          Store Receipt Voucher (SRV)
        </h1>

        {/* Form */}
        <div className="mb-10">

          <SRVForm onAddSRV={addNewSRV} />

        </div>

        {/* Table */}
        <RecentSRVTable
          records={srvRecords}
        />

      </div>

    </MainLayout>

  );

};

export default SRV;