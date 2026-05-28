import currentUser from "../../data/currentUser";

const RecentSIVTable = ({
  requests,
  onApprove,
  onReject
}) => {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md mt-8">

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Recent SIV Requests
      </h2>

      {/* Table Wrapper */}
      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          {/* Table Head */}
          <thead>

            <tr className="bg-gray-100 text-left">

              <th className="p-4">SIV ID</th>

              <th className="p-4">Material Code</th>

              <th className="p-4">Requested Quantity</th>

              <th className="p-4">Status</th>

              <th className="p-4">Actions</th>

            </tr>

          </thead>

          {/* Table Body */}
          <tbody>

            {requests.map((item) => (

              <tr
                key={item.siv_id}
                className="border-b hover:bg-gray-50 transition-all"
              >

                {/* SIV ID */}
                <td className="p-4">
                  {item.siv_id}
                </td>

                {/* Material Code */}
                <td className="p-4">
                  {item.matcode}
                </td>

                {/* Quantity */}
                <td className="p-4">
                  {item.requested_quantity}
                </td>

                {/* Status */}
                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                {/* Actions */}
                <td className="p-4">

                  {
                    currentUser.role === "Higher Authority" &&
                    item.status === "Pending" && (

                      <div className="flex gap-2">

                        {/* Approve Button */}
                        <button
                          onClick={() => onApprove(item.siv_id)}
                          className="
                            bg-green-600
                            hover:bg-green-700
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            text-sm
                            transition-all
                          "
                        >
                          Approve
                        </button>

                        {/* Reject Button */}
                        <button
                          onClick={() => onReject(item.siv_id)}
                          className="
                            bg-red-600
                            hover:bg-red-700
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            text-sm
                            transition-all
                          "
                        >
                          Reject
                        </button>

                      </div>

                    )
                  }

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

};

export default RecentSIVTable;