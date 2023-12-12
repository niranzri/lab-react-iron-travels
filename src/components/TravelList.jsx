

function TravelList ({travelplans}) {
    
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
            </div>
          </div>
        )
      })}
    </>
    );

}

export default TravelList;
