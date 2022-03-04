import React, { useState } from "react";
import AddOrder from "./components/AddOrder";
import EditOrder from "./components/EditOrder";
import OrderTable from "./components/OrderTable";
import "./App.css";

function App() {
  // Data
  const ordersData = [
    { id: 1, name: "Mojito", price: "5", notes: "test note" },
    { id: 2, name: "Shake", price: "15", notes: "" },
    { id: 3, name: "Coffee", price: "35", notes: "" }
  ];

  const initialFormState = { id: null, name: "", price: "", notes: "" };

  // Setting state
  const [orders, setOrders] = useState(ordersData);
  const [currentOrder, setCurrentOrder] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addOrder = order => {
    order.id = orders.length + 1;
    setOrders([...orders, order]);
  };

  const deleteOrder = id => {
    setEditing(false);
    setOrders(orders.filter(order => order.id !== id));
  };

  const updateOrder = (id, updatedOrder) => {
    setEditing(false);
    setOrders(orders.map(order => (order.id === id ? updatedOrder : order)));
  };

  const editRow = order => {
    setEditing(true);
    setCurrentOrder({
      id: order.id,
      name: order.name,
      price: order.price,
      notes: order.notes
    });
  };

  return (
    <div className="container">
      <h1>Daily Drinks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <React.Fragment>
              <h2>Edit order</h2>
              <EditOrder
                editing={editing}
                setEditing={setEditing}
                currentOrder={currentOrder}
                updateOrder={updateOrder}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h2>Add order</h2>
              <AddOrder addOrder={addOrder} />
            </React.Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View orders</h2>
          <OrderTable
            orders={orders}
            editRow={editRow}
            deleteOrder={deleteOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
