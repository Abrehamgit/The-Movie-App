import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../containers/Home';
import MovieDetail from '../components/Movie Detail/MovieDetail';
import {PageNotFound} from '../components/PageNotFound';

const AppRouter = () =>
( 
    <BrowserRouter>
    	<div>    	   
    		<Switch>
        		<Route path='/' component={Home}  exact={true} />
        		<Route path='/movie/:id' component = {MovieDetail} exact={true}/>
        		<Route component={PageNotFound} />
    		</Switch>
    	</div>
    </BrowserRouter>

)



export default AppRouter;