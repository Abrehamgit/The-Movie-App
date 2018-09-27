import React from 'react';
import {Link} from 'react-router-dom';
import './MovieCard.css'

const MovieCard = ({path,Id}) => (

      <Link to={{
      	pathname: `movie/${Id}`,
      	state: {
          Id: Id,
      	}
      }}> 
             <div className='movie-card-poster grow '>
              <img  src= {`https://fmovies.cc/wp-content/uploads/2018/09/${path}`} 
                    className="z-depth-3" 
                    alt={'http://via.placeholder.com/300x300'}
                    />                            
           </div>

       </Link>  
	)

export default MovieCard;

