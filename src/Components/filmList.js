import React from 'react';
import FilmCard from './filmCard.js';

const FilmList = ({ films }) => {
    return(
        <div>
            {films.map((user,i) => {
                return (
                    <FilmCard
                    key={i} 
                    name={films[i].title.toLowerCase()} 
                    episode={films[i].episode_id}
                    release_date={films[i].release_date} 
                    />
                );
            })}
        </div>
    );
}

export default FilmList;