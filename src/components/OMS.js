//Library Imports
import React, { useState, useEffect } from "react";

//Component Imports
import "./OMS.css";
import Toprow from "./Toprow";
import Data from "./Data";
const OMS = () => {
  //State Values
  const [searchState, setSearchState] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  //FUNCTIONS
  //Load Orders
  useEffect(() => {
    setLoading(true);
    const updateOrders = async () => {
      const res = await fetchOrders();
      setOrdersList(res);
      setLoading(false);
    };
    updateOrders();
  }, []);
  //Fetch Orders from database
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:5000/orders");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  //Search Icon Click Functionality
  const handleSearchClick = () => {
    setSearchState(!searchState);
  };

  //Toggle Add Order Form
  const toggleForm = () => {
    setShowForm(true);
  };
  const handleCancelClick = () => {
    setShowForm(false);
  };

  const closeForm = (bool) => {
    setShowForm(bool);
  };
  const addOrder = async (order) => {
    try {
      const res = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      setOrdersList([...ordersList, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteClick = async (order) => {
    const res = await fetch(`http://localhost:5000/orders/${order._id}`, {
      method: 'DELETE'
    })
    setOrdersList(ordersList.filter(o=> o._id !== order._id));
  }

  return (
    <main className="oms-section__container">
      {loading ? (
        <p className="loading">...Loading...</p>
      ) : (
        <React.Fragment>
          <Toprow
            searchState={searchState}
            handleSearchClick={handleSearchClick}
            toggleForm={toggleForm}
          />
          <Data
            ordersList={ordersList}
            showForm={showForm}
            handleCancelClick={handleCancelClick}
            addOrder={addOrder}
            closeForm={closeForm}
            handleDeleteClick={handleDeleteClick}
          />
        </React.Fragment>
      )}
    </main>
  );
};

export default OMS;
