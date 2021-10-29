//Library Imports
import React, { useState, useRef, useEffect } from "react";

//Component Imports
import "./OMS.css";
import Toprow from "./Toprow";
import Data from "./Data";
const OMS = () => {
  //State Values
  const [searchState, setSearchState] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <main className="oms-section__container">
      {loading ? (
        <p className="loading">...Loading...</p>
      ) : (
        <React.Fragment>
          <Toprow
            searchState={searchState}
            handleSearchClick={handleSearchClick}
          />
          <Data ordersList={ordersList} />
        </React.Fragment>
      )}
    </main>
  );
};

export default OMS;
