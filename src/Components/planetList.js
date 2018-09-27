import React from 'react';
import PlanetCard from './planetCard.js';

const PlanetList = ({ planets }) => {
    return(
        <div>
            {planets.map((user,i) => {
                return (
                    <PlanetCard
                    key={i} 
                    name={planets[i].name}
                    rotation_period={planets[i].rotation_period} 
                    orbital_period={planets[i].orbital_period}
                    climate={planets[i].climate} 
                    gravity={planets[i].gravity} 
                    />
                );
            })}
        </div>
    );
}

export default PlanetList;