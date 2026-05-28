const RecentSRVTable = ({ records }) => {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md mt-8">

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Recent SRV Records
      </h2>

      {/* Table Wrapper */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          {/* Table Head */}
          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">SRV ID</th>

              <th className="p-4">Material Code</th>

              <th className="p-4">Received Quantity</th>

              <th className="p-4">Supplier</th>

              <th className="p-4">Status</th>

            </tr>

          </thead>

          {/* Table Body */}
          <tbody>

            {records.map((item) => (

              <tr
                key={item.srv_id}
                className="border-b hover:bg-gray-50 transition-all"
              >

                {/* SRV ID */}
                <td className="p-4">
                  {item.srv_id}
                </td>

                {/* Material Code */}
                <td className="p-4">
                  {item.matcode}
                </td>

                {/* Quantity */}
                <td className="p-4">
                  {item.received_quantity}
                </td>

                {/* Supplier */}
                <td className="p-4">
                  {item.supplier_name}
                </td>

                {/* Status */}
                <td className="p-4">

                  <span
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                      bg-green-100
                      text-green-700
                    "
                  >
                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default RecentSRVTable;