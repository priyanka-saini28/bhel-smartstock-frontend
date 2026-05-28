import { useState } from "react";

const SRVForm = ({ onAddSRV }) => {

  const [formData, setFormData] = useState({
    matcode: "",
    received_quantity: "",
    supplier_name: ""
  });

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Handle Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    // Validation
    if (
      !formData.matcode ||
      !formData.received_quantity ||
      !formData.supplier_name ||
      formData.received_quantity <= 0
    ) {
      return;
    }

    // New SRV Record
    const newSRV = {

      srv_id: Date.now(),

      matcode: formData.matcode,

      received_quantity: Number(formData.received_quantity),

      supplier_name: formData.supplier_name,

      status: "Received"

    };

    onAddSRV(newSRV);

    // Reset Form
    setFormData({
      matcode: "",
      received_quantity: "",
      supplier_name: ""
    });

  };

  return (

    <div className="bg-white p-6 rounded-2xl shadow-md">

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Log Store Receipt Voucher (SRV)
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Material Code */}
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
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Quantity */}
        <div>

          <label className="block mb-2 font-medium text-gray-700">
            Received Quantity
          </label>

          <input
            type="number"
            min="1"
            name="received_quantity"
            value={formData.received_quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Supplier */}
        <div>

          <label className="block mb-2 font-medium text-gray-700">
            Supplier Name
          </label>

          <input
            type="text"
            name="supplier_name"
            value={formData.supplier_name}
            onChange={handleChange}
            placeholder="Enter Supplier Name"
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              px-4
              py-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            bg-blue-600
            hover:bg-blue-700
            transition-all
            text-white
            px-6
            py-3
            rounded-xl
            font-medium
          "
        >
          Submit SRV
        </button>

      </form>

    </div>

  );

};

export default SRVForm;