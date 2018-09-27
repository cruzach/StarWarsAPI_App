import React from 'react';

const PlanetCard = ({name,rotation_period,orbital_period,climate,gravity}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>Rotation Period: {rotation_period} hours</p>
            <p>Orbital Period: {orbital_period} days</p>
            <p>Climate: {climate}</p>
            <p>Gravity: {gravity}</p>
        </div>
    );
}

export default PlanetCard;