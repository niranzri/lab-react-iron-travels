import { useState } from "react";

function TravelList ({travelplans}) {
    const [plans, setPlans] = useState(travelplans);

    const handleDelete = (id) => {
        const newPlans = plans.filter(plan => plan.id !== id);
        setPlans(newPlans);
    }

    return (
    <>
    {travelplans.map((plan) => {
        return (
          <div key={plan.id} className="outer-card">
            <img src={plan.image} alt="destination image"/>
            <div className="inner-card">
              <h4> {plan.destination} ({plan.days} Days)</h4>
              <p> {plan.description} </p>
              <p> <span>Price:</span> {plan.totalCost} €</p>
              <div className="labels">
                {plan.totalCost <= 350 && <span className="greenDiv">Great Deal</span>}
                {plan.totalCost >= 1500 && <span className="blueDiv">Premium</span>}
                {plan.allInclusive && <span className="blueDiv">All Inclusive</span>}
              </div>
              <button className="deleteButton" onClick = {() => handleDelete(plan.id)}> Delete </button>
            </div>
          </div>
        )
      })}
    </>
    );

}

export default TravelList;
