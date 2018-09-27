import React from 'react';
import SpeciesCard from './speciesCard.js';

const SpeciesList = ({ species }) => {
    return(
        <div>
            {species.map((user,i) => {
                return (
                    <SpeciesCard
                    key={i} 
                    name={species[i].name.toLowerCase()} 
                    classification={species[i].classification}
                    designation={species[i].designation} 
                    average_lifespan={species[i].average_lifespan} 
                    language={species[i].language} 
                    />
                );
            })}
        </div>
    );
}

export default SpeciesList;