//Library Imports
import { useState, useRef, useEffect } from "react";

//Component Imports
import "./OMS.css";
import Toprow from "./Toprow";
import Data from './Data';

const OMS = () => {
  //State Values
  const [searchState, setSearchState] = useState(false);

  //Functions
  const handleSearchClick = () => {
    setSearchState(!searchState);
  };
  return (
    <main className="oms-section__container">
      <Toprow searchState={searchState} handleSearchClick={handleSearchClick} />
      <Data />
    </main>
  );
};

export default OMS;
