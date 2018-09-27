import React,{Component} from 'react';
import MovieList from '../components/New Movies/MovieList';
import SearchBox from '../components/Search/SearchBox';
import {Consumer} from '../context/MyProvider';
import {SearchList} from '../components/Search/SearchList';
import Header from '../components/Layouts/Header';

class Home extends Component {
	render(){
		return(	
			<div>
				<div >
					<Header />					
					<SearchBox /> 
				</div>
				<Consumer>
				    
					{(context)=>{
						if(!context.searchAll){
							return(
					         
						        <div className='d-flex justify-content-center'> 						          						          	        	
						          	<MovieList />
						        </div>   

							)		
						}	
						else if(!!context.searchAll){
							return(

									<div>
										<SearchList />									
									</div>

								)
						}			
					}}

				</Consumer>
			</div>
		)

	}
}

export default Home;