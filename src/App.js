//Library Imports
import { useState } from "react";

// Component Imports
import Header from "./components/Header";
import OMS from "./components/OMS";
import HeroSection from "./components/HeroSection";
import SignInModalOverlay from "./components/SignInModalOverlay";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";

function App() {
  //State Values
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [signInModalState, setSignInModalState] = useState(false);
  const [signUpModalState, setSignUpModalState] = useState(false);

  //FUNCTIONS
  //MAIN INTERFACE BUTTONS
  const onSignInClick = () => {
    if (signUpModalState) {
      setSignUpModalState(false);
    }
    setSignInModalState(true);
    // setUserSignedIn(true);
  };
  const onSignUpClick = () => {
    if (signInModalState) {
      setSignInModalState(false);
    }
    setSignUpModalState(true);
  };
  const onSignOutClick = () => {
    setUserSignedIn(false);
  };
  const handleOverlayClick = () => {
    if (signInModalState) {
      setSignInModalState(false);
    }
    if (signUpModalState) {
      setSignUpModalState(false);
    }
  };
  //TEMPORARY SIGN IN FUNCTION
  const administerSignIn = () => {
    setUserSignedIn(true);
    handleOverlayClick();
  };
  return (
    <div className="app__container">
      <Header
        userSignedIn={userSignedIn}
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}
        onSignUpClick={onSignUpClick}
      />
      {signInModalState && (
        <SignInModalOverlay handleOverlayClick={handleOverlayClick} />
      )}
      {signUpModalState && (
        <SignInModalOverlay handleOverlayClick={handleOverlayClick} />
      )}
      {signUpModalState && (
        <SignUpModal
          handleOverlayClick={handleOverlayClick}
          onSignInClick={onSignInClick}
        />
      )}
      {signInModalState && (
        <SignInModal
          handleOverlayClick={handleOverlayClick}
          onSignUpClick={onSignUpClick}
          administerSignIn={administerSignIn}
        />
      )}
      {userSignedIn ? <OMS /> : <HeroSection />}
    </div>
  );
}

export default App;
