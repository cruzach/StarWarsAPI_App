import React from 'react';
import PersonCard from './personCard.js';

const PersonsList = ({ people }) => {
    return(
        <div>
            {people.map((user,i) => {
                return (
                    <PersonCard
                    key={i} 
                    name={people[i].name} 
                    height={people[i].height}
                    mass={people[i].mass} 
                    gender={people[i].gender} 
                    />
                );
            })}
        </div>
    );
}

export default PersonsList;