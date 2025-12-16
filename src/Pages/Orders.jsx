

import React, { useContext } from "react";
import { OrderContext } from "../Context/OrderContext";
import { UserContext } from "../Context/UserContext";

const Orders = () => {
  const { orders, deleteOrder } = useContext(OrderContext);
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <h2 className="text-center mt-20 text-lg font-semibold text-gray-500">
        Please login to view your orders
      </h2>
    );
  }

  const userOrders = user.isAdmin
    ? orders
    : orders.filter(order => order.userId === user.id);

  if (userOrders.length === 0) {
    return (
      <h2 className="text-center mt-20 text-lg font-semibold text-gray-500">
        No Orders Found
      </h2>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        {user.isAdmin ? "All Orders" : "My Orders"}
      </h2>

      {userOrders.map((order) => {
        const totalItems = order.items.reduce(
          (sum, item) => sum + item.quantity,
          0
        );

        return (
          <div
            key={order.id}
            className="mb-10 bg-white rounded-xl shadow-sm border border-gray-200"
          >
          
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-5 bg-gray-50 border-b text-sm font-semibold text-gray-700">
              <div>
                <p className="text-xs text-gray-500">ORDER ID</p>
                <p>{order.id}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">TOTAL</p>
                <p>₹{order.total}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">ITEMS</p>
                <p>{totalItems}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">PAYMENT</p>
                <p>{order.payment}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">DATE</p>
                <p>{new Date(order.date).toLocaleDateString()}</p>
              </div>
            </div>

             {user.isAdmin && (
              <div className="flex justify-end px-5 pt-4">
                <button
                  onClick={() => deleteOrder(order.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm transition"
                >
                  Delete Order
                </button>
              </div>
            )}

          
            <div className="divide-y">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-4"
                >
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Price: ₹{item.price}
                    </p>
                  </div>

                  <div className="flex gap-6 text-sm font-semibold text-gray-700">
                    <span>Qty: {item.quantity}</span>
                    <span className="text-gray-900">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              ))}
            </div>

           
            <div className="bg-gray-50 px-5 py-4 flex justify-between items-center font-semibold text-gray-800">
              <span>Total Payable</span>
              <span className="text-lg">₹{order.total}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
