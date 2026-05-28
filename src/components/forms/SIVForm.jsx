import { useState } from "react";
import toast from "react-hot-toast";
const SIVForm = ({ onAddRequest }) => {
  const [formData, setFormData] = useState({
    matcode: "",
    requested_quantity: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
            !formData.matcode ||
            !formData.requested_quantity ||
            formData.requested_quantity <= 0
        )
        {return }

    const newRequest = {
      siv_id: Date.now(),
      matcode: formData.matcode,
      requested_quantity: Number(formData.requested_quantity),
      status: "Pending",
    };

    onAddRequest(newRequest);
    toast.success(

        `SIV Request Raised Successfully
    
        SIV ID: ${newRequest.siv_id}
        Status: ${newRequest.status}`,

        {
            duration: 3000,
        }

    );

    setFormData({
      matcode: "",
      requested_quantity: "",
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Raise SIV Request
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Material Code
          </label>

          <input
            type="text"
            name="matcode"
            value={formData.matcode}
            onChange={handleChange}
            placeholder="Enter Material Code"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Requested Quantity
          </label>

          <input
            type="number"
            min="1"
            name="requested_quantity"
            value={formData.requested_quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-xl font-medium"
        >
          Submit SIV
        </button>
      </form>
    </div>
  );
};

export default SIVForm;