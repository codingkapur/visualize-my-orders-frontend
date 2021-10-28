//Library Imports
import { useState } from "react";

// Component Imports
import Header from "./components/Header";
import OMS from "./components/OMS";
import HeroSection from "./components/HeroSection";

function App() {
  //State Values
  const [userSignedIn, setUserSignedIn] = useState(true);

  const onSignInClick = () => {
    setUserSignedIn(true);
  };
  const onSignOutClick = () => {
    setUserSignedIn(false);
  };

  return (
    <div className="app__container">
      <Header
        userSignedIn={userSignedIn}
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}
      />
      {userSignedIn ? <OMS /> : <HeroSection />}
    </div>
  );
}

export default App;
