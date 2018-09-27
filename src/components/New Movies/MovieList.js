import React from 'react';
import MovieCard from './MovieCard';
import {Consumer} from '../../context/MyProvider';
import './MovieList.css'
import Loader from  '../../Spinner';

const MovieList = () =>(
  <div>
       <h2 className='tc'> Latest Movies </h2>
       <div className='movie-list-container'>

       		<Consumer>
       			{(context)=>{
                          if(context.MoviesInfo.length!==20 && !context.searchLatest){
                            return (<div> <Loader /> </div>)
                          }else
                             { return (context.MoviesInfo.map(movie=>(
                                                              <MovieCard 
                                                                title={movie.title}
                                                                release_date= {movie.release_date}
                                                                path= {movie.poster_path}
                                                                alt={movie.backdrop_path}
                                                                overview = {movie.overview}
                                                                rating = {movie.vote_average}
                                                                genre= {movie.genre_ids[1]}
                                                                Id = {movie.id}
                                                              />
                                                     )))
                                  }}
       			}
       		</Consumer>
       		
       </div>
    </div>

	)

export default MovieList;