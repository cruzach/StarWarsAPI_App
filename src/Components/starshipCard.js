import React from 'react';

const StarshipCard = ({name,starship_class,cost_in_credits,length,hyperdrive_rating}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>Class: {starship_class}</p>
            <p>Cost: {cost_in_credits>0 ? `${cost_in_credits} credits` : `unknown`}</p>
            <p>Length: {length} meters</p>
            <p>Hyperdrive Rating: {hyperdrive_rating}</p>
        </div>
    );
}

export default StarshipCard;