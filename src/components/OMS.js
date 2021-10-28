//Library Imports
import { useState, useRef, useEffect } from "react";

//Component Imports
import "./OMS.css";
import Toprow from "./Toprow";
import Data from "./Data";
const OMS = () => {
  //State Values
  const [searchState, setSearchState] = useState(false);
  const [ordersList, setOrdersList] = useState([]);

  //FUNCTIONS
  //Load Orders
  useEffect(() => {
    const updateOrders = async () => {
      const res = await fetchOrders();
      setOrdersList(res);
    };
    updateOrders();
  }, []);
  //Fetch Orders from database
  const fetchOrders = async () => {
    const res = await fetch("http://localhost:5000/orders");
    const data = await res.json();
    return data;
  };
  //Search Icon Click Functionality
  const handleSearchClick = () => {
    setSearchState(!searchState);
  };
  return (
    <main className="oms-section__container">
      <Toprow searchState={searchState} handleSearchClick={handleSearchClick} />
      <Data ordersList={ordersList} />
    </main>
  );
};

export default OMS;
