const Leftrow = ({ order }) => {
  return (
    <div className="data__row--left">
      <input type="checkbox" className="input__checkbox user--data__item" />
      <p className="row__user--name user--data__item">{order.name}</p>
    </div>
  );
};

export default Leftrow;
