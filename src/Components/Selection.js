import React from 'react';

const Selection = ({onButtonSelection}) => {
    return(
            <div className="ph3 pt5">
                <button className="f4 link dim ph3 pv2 mb2 dib white bg-near-black ma2 pointer" onClick={ () => onButtonSelection('people')}>People</button>
                <button className="f4 link dim ph3 pv2 mb2 dib white bg-near-black ma2 pointer" onClick={ () => onButtonSelection('planets')}>Planets</button>
                <button className="f4 link dim ph3 pv2 mb2 dib white bg-near-black ma2 pointer" onClick={ () => onButtonSelection('films')}>Films</button>
                <button className="f4 link dim ph3 pv2 mb2 dib white bg-near-black ma2 pointer" onClick={ () => onButtonSelection('species')}>Species</button>
                <button className="f4 link dim ph3 pv2 mb2 dib white bg-near-black ma2 pointer" onClick={ () => onButtonSelection('vehicles')}>vehicles</button>
                <button className="f4 link dim ph3 pv2 mb2 dib white bg-near-black ma2 pointer" onClick={ () => onButtonSelection('starships')}>Starships</button>
            </div>
    );
}

export default Selection;