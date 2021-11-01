//Library Imports
import { useState } from "react";

// Component Imports
import Header from "./components/Header";
import OMS from "./components/OMS";
import HeroSection from "./components/HeroSection";
import SignInModal from "./components/SignInModal";
import SignInModalOverlay from "./components/SignInModalOverlay";

function App() {
  //State Values
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [signInModalState, setSignInModalState] = useState(false);

  const onSignInClick = () => {
    setSignInModalState(true);
    // setUserSignedIn(true);
  };
  const onSignOutClick = () => {
    setUserSignedIn(false);
  };
  const handleOverlayClick = () => {
    setSignInModalState(false);
  };

  return (
    <div className="app__container">
      <Header
        userSignedIn={userSignedIn}
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}
      />
      {signInModalState && (
        <SignInModalOverlay handleOverlayClick={handleOverlayClick} />
      )}
      {signInModalState && <SignInModal />}
      {userSignedIn ? <OMS /> : <HeroSection />}
    </div>
  );
}

export default App;
