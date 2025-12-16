

import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h1>

      <Link
        to="/orders"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded"
      >
        View Order History
      </Link>
    </div>
  );
};

export default OrderSuccess;
