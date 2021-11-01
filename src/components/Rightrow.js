const Rightrow = ({ order }) => {

  const typeColor = (status) => {
    if (status === "Paid" || status === "Delivered") {
      return "green";
    }
    if (status === "On Delivery" || status === "Not Delivered") {
      return "red";
    }
    if (status === "In Transit") {
      return "blue";
    }
  };

  return (
    <div className="data__row--right">
      <p className="row__user--item user--data__item">{order.item}</p>
      <p className={`row__user--delivery user--data__item ${typeColor(order.delivery_status)}`}>
        {order.delivery_status}
      </p>
      <p className={`row__user--payment user--data__item ${typeColor(order.payment_status)}`}>
        {order.payment_status}
      </p>
      <p className="row__user--date user--data__item">{order.date}</p>
      <p className="row__user--source user--data__item">{order.source}</p>
      <p className="row__user--address user--data__item">{order.address}</p>
      <p className="row__user--phone user--data__item">{order.phone}</p>
      <p className="row__user--email user--data__item">{order.email}</p>
    </div>
  );
};

export default Rightrow;
