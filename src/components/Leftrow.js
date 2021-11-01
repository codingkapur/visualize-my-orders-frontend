import { BsFillTrashFill } from "react-icons/bs";
import {AiFillEdit} from 'react-icons/ai'
const Leftrow = ({ order , handleDeleteClick}) => {
  return (
    <div className="data__row--left">
      <input type="checkbox" className="input__checkbox user--data__item" />
      <p className="row__user--name ">{order.name}</p>
      <div className="operations__container">
        <BsFillTrashFill className="operation__icon delete__icon" onClick = {()=> handleDeleteClick(order)}/>
        <AiFillEdit className="operation__icon delete__icon"/>
      </div>
    </div>
  );
};

export default Leftrow;
