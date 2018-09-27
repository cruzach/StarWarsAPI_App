import React from 'react';

const PersonCard = ({name,height,mass,gender}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name.toLowerCase()}</h3>
            <p>Height: {height} cm</p>
            <p>Mass: {mass} Kilograms</p>
            <p>Gender: {gender}</p>
        </div>
    );
}

export default PersonCard;