import React from "react";

import './Header.css'

const Header = ({ userSignedIn }) => {
  return (
    <header className="header__container">
      <p className="logo">Orders Management System</p>
      <div className="welcome-message__container">
        {userSignedIn ? <p className="welcome-message">Welcome, Raghav</p> : ""}
      </div>
      <div className="header__buttons--container">
        {userSignedIn ? (
          <p className="header__btn sign-out__btn btn">Sign Out</p>
        ) : (
          <React.Fragment>
            <p className="header__btn sign-in__btn btn">Sign In</p>
            <p className="header__btn sign-up__btn btn">Sign Up</p>
          </React.Fragment>
        )}
      </div>
    </header>
  );
};

export default Header;
