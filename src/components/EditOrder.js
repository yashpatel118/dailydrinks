import React, { useState, useEffect } from "react";

const EditOrder = props => {
  const [order, setOrder] = useState(props.currentOrder);

  useEffect(() => {
    setOrder(props.currentOrder);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setOrder({ ...order, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateOrder(order.id, order);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        required
        name="name"
        value={order.name}
        onChange={handleInputChange}
      />
      <label>Price</label>
      <input
        type="text"
        required
        name="price"
        value={order.price}
        onChange={handleInputChange}
      />
      <label>Notes</label>
      <textarea name="notes" value={order.notes} onChange={handleInputChange} />
      <button>Update order</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditOrder;
