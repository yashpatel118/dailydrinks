import React from "react";

const OrderTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.orders.length > 0 ? (
        props.orders.map(order => (
          <tr key={order.id}>
            <td>{order.name}</td>
            <td>{order.price}</td>
            <td>{order.notes}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(order);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteOrder(order.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No orders</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default OrderTable;
