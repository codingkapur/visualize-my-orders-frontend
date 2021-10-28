//Library Imports
import { useState } from "react";

// Component Imports
import Header from "./components/Header";
import OMS from "./components/OMS";
import HeroSection from "./components/HeroSection";

function App() {
  //State Values
  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <div className="app__container">
      <Header userSignedIn={userSignedIn}/>
      {userSignedIn ? <OMS /> : <HeroSection />}
    </div>
  );
}

export default App;
