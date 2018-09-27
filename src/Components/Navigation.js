import React from 'react';

const Navigation = ({ onButtonSelection }) => {

            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => window.location.reload()} className='f3 link dim white underline pr3 pointer'>Go Back</p>
                </nav>
            )
        
}


export default Navigation;