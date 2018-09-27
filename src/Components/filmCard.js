import React from 'react';

const FilmCard = ({name,episode,release_date}) => {
    return(
        <div className="bg-yellow shadow-5 tc grow dib pa3 ma2 br3">
            <h3>{name}</h3>
            <p>Episode: {episode}</p>
            <p>Release Date: {release_date}</p>
        </div>
    );
}

export default FilmCard;