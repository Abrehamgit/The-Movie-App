import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './MovieDetail.css'
import DetailCard from './DetailCard';
import {ApiKey} from '../../config';
import Cast from './Cast';
import {Fa} from 'mdbreact';

class MovieDetail extends Component{


	constructor(){
			super();
			this.state={
				movie:[],
			}
		}

	componentDidMount(){
		 const {Id} = this.props.location.state;
		 fetch(`https://api.themoviedb.org/3/movie/${Id}?api_key=${ApiKey}&language=en-US&append_to_response=credits`)		
         .then(resp=> resp.json())
         .then((rslt) => {            	           
        	this.setState({movie: rslt})      	
        })
        
	}


	render(){

		    const {movie} = this.state;
		    console.log(movie)
		    
		    
		    
        	return(      

	        <div>
		        <div className='d-header'>
		        	<Link to='/' > <Fa icon='backward' size='4x' className='icon' /> </Link>
		            
				</div>
			   <div className='detail-container'>
			   		 <div className='d-img'><img src= {`https://fmovies.cc/wp-content/uploads/2018/09/${movie.poster_path}`} className='rounded '/></div>
			   		 <DetailCard  overview={movie.overview}
			   		   			  release_date = {movie.release_date}
			   		   			  title = {movie.title}
			   		   			  genre={movie.genre}
			   		   			  rating={movie.vote_average}
			   		   			  />
			   		 <Cast />
			   </div>			  
               
		    </div>
	     )
        }


	}	
        
 
 
export default MovieDetail;