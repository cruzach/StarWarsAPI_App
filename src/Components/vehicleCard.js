import React from 'react';

const VehicleCard = ({name,length,cost_in_credits}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>Length: {length} meters</p>
            <p>Cost: {cost_in_credits>0 ? `${cost_in_credits} credits` : `unknown`}</p>
        </div>
    );
}

export default VehicleCard;