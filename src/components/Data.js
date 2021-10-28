import Leftrow from './Leftrow';
import Rightrow from './Rightrow';

import './Data.css'

const Data = ({ ordersList }) => {
  return (
    <div className="data__container">
      <div className="data__container--left">
        <div className="heading__row--left">
          <input type="checkbox" className="input__checkbox user--data__item" />
          <p className="row__user--name user--data__item">Name</p>
        </div>
        {ordersList.map(order=> {
            return <Leftrow order={order} key={order._id}/>
        })}
      </div>
      <div className="data__container--right">
        <div className="heading__row--right">
          <p className="row__user--item user--data__item">Items(s)</p>
          <p className="row__user--delivery user--data__item">Delivery</p>
          <p className="row__user--payment user--data__item">Payment</p>
          <p className="row__user--date user--data__item">Date/Time</p>
          <p className="row__user--source user--data__item">Source</p>
          <p className="row__user--address user--data__item">Address</p>
          <p className="row__user--phone user--data__item">Phone</p>
        </div>
        {ordersList.map(order=> {
            return <Rightrow order={order} key={order._id}/>
        })}
      </div>
    </div>
  );
};

export default Data;
