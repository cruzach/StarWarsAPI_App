import React from 'react';
import VehicleCard from './vehicleCard.js';

const VehicleList = ({ vehicles }) => {
    return(
        <div>
            {vehicles.map((user,i) => {
                return (
                    <VehicleCard
                    key={i} 
                    name={vehicles[i].name.toLowerCase()} 
                    length={vehicles[i].length}
                    cost_in_credits={vehicles[i].cost_in_credits} 
                    />
                );
            })}
        </div>
    );
}

export default VehicleList;