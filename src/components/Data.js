import React, { useState, useEffect } from "react";

import ModalOverlay from './ModalOverlay';
import Modal from "./Modal";
import Leftrow from "./Leftrow";
import Rightrow from "./Rightrow";
import Pagination from "./Pagination";

import "./Data.css";
import { ORDERS_PER_PAGE } from "../utils/constants";

const Data = ({
  ordersList,
  showForm,
  handleCancelClick,
  addOrder,
  closeForm,
  handleDeleteClick,
}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * ORDERS_PER_PAGE;
  const ordersOnPage = ordersList.slice(
    startIndex,
    startIndex + ORDERS_PER_PAGE
  );

  useEffect(() => {
    setTotalPages(Math.ceil(ordersList.length / ORDERS_PER_PAGE));
  }, [totalPages, ordersList]);

  const handleLeftClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleRightClick = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="data__container">
      {showForm ? (
        <React.Fragment>
          <ModalOverlay />
          <Modal
            handleCancelClick={handleCancelClick}
            addOrder={addOrder}
            closeForm={closeForm}
          />
        </React.Fragment>
      ) : (
        ""
      )}
      <div className="data__container--left">
        <div className="heading__row--left">
          <input type="checkbox" className="input__checkbox user--data__item" />
          <p className="row__user--name ">Name</p>
        </div>
        {ordersOnPage.map((order) => {
          return (
            <Leftrow
              order={order}
              key={order._id}
              handleDeleteClick={handleDeleteClick}
            />
          );
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
          <p className="row__user--phone user--data__item">Email</p>
        </div>
        {ordersOnPage.map((order) => {
          return <Rightrow order={order} key={order._id} />;
        })}
      </div>
      <Pagination
        ordersList={ordersList}
        totalPages={totalPages}
        page={page}
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </div>
  );
};

export default Data;
