import React, { useState } from "react";

const AddOrder = props => {
  const initialFormState = { id: null, name: "", price: "", notes: "" };
  const [order, setOrder] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setOrder({ ...order, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!order.name || !order.price) return;

        props.addOrder(order);
        setOrder(initialFormState);
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
      <button>Add new order</button>
    </form>
  );
};

export default AddOrder;
