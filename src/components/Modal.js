import { useState } from "react";

const Modal = ({ handleCancelClick, create, addOrder, closeForm }) => {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const [delivery_status, setDeliveryStatus] = useState("");
  const [payment_status, setPaymentStatus] = useState("");
  const [source, setSource] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    addOrder({
      name,
      item,
      delivery_status,
      payment_status,
      source,
      address,
      phone,
      email,
    });

    setName("");
    setItem("");
    setDeliveryStatus("");
    setPaymentStatus("");
    setSource("");
    setAddress("");
    setPhone("");
    setEmail("");

    closeForm(false);
  };

  return (
    <div className="add--form__container">
      <h3 className="add-order--title">Create a new order</h3>
      <form className="add--order__form--container" onSubmit={onFormSubmit}>
        <div className="form-control">
          <label>Name:</label>
          <input
            value={name}
            name="name"
            required
            type="text"
            placeholder="Enter customer's name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Item(s):</label>

          <select
            required
            value={item}
            name="item"
            onChange={(e) => setItem(e.target.value)}
          >
            <option disabled></option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Shorts">Shorts</option>
            <option value="Pants">Pants</option>
            <option value="Track Pants">Track Pants</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Sweatshirt">Sweatshirt</option>
            <option value="Sneakers">Sneakers</option>
          </select>
        </div>
        <div className="form-control">
          <label>Delivery:</label>
          <select
            value={delivery_status}
            required
            name="delivery_status"
            onChange={(e) => setDeliveryStatus(e.target.value)}
          >
            <option disabled></option>
            <option value="Not Delivered">Not Delivered</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        <div className="form-control">
          <label>Payment:</label>
          <select
            value={payment_status}
            required
            name="payment_status"
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option disabled></option>
            <option value="Paid">Paid</option>
            <option value="On Delivery">On Delivery</option>
          </select>
        </div>
        <div className="form-control">
          <label>Source:</label>
          <select
            value={source}
            required
            name="source"
            onChange={(e) => setSource(e.target.value)}
          >
            <option disabled></option>
            <option value="Manual">Manual</option>
            <option value="Website">Website</option>
          </select>
        </div>
        <div className="form-control">
          <label>Address:</label>
          <input
            value={address}
            name="address"
            required
            type="text"
            placeholder="Enter customer's address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Phone:</label>
          <input
            value={phone}
            name="phone"
            required
            type="text"
            placeholder="Enter customer's phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>E-Mail:</label>
          <input
          name="email"
            value={email}
            required
            type="text"
            placeholder="Enter customer's e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form--buttons__container">
          <button className="form-btn submit-btn" type="submit">
            Create Order
          </button>
          <p className="form-btn cancel-btn" onClick={handleCancelClick}>
            Cancel
          </p>
        </div>
      </form>
    </div>
  );
};
export default Modal;
