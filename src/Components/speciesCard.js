import React from 'react';

const SpeciesCard = ({name,classification,designation,average_lifespan,language}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>Classification: {classification} </p>
            <p>Designation: {designation}</p>
            <p>Average Lifespan: {average_lifespan}</p>
            <p>Language: {language}</p>
        </div>
    );
}

export default SpeciesCard;