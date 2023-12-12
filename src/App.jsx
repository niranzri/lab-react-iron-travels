import logo from "./data/logo.png";
import { useState } from "react";
import travelPlansData from "./data/travel-plans.json";
import TravelList from "./components/TravelList";
import "./App.css";



function App() {
  const [plans, setPlans] = useState(travelPlansData);
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {/* RENDER YOUR LIST COMPONENT HERE */}
      <TravelList travelplans={travelPlansData}/>
      

    </>
  );
}

export default App;
