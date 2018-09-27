import React from 'react';
import StarshipCard from './starshipCard.js';

const StarshipList = ({ starships }) => {
    return(
        <div>
            {starships.map((user,i) => {
                return (
                    <StarshipCard
                    key={i} 
                    name={starships[i].name.toLowerCase()} 
                    starship_class={starships[i].starship_class}
                    cost_in_credits={starships[i].cost_in_credits} 
                    length={starships[i].length} 
                    hyperdrive_rating={starships[i].hyperdrive_rating}
                    />
                );
            })}
        </div>
    );
}

export default StarshipList;