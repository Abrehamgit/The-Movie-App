import React from 'react';
import {Fa} from 'mdbreact';
import {Link} from 'react-router-dom';
import './NotFound.css';


export const PageNotFound = () =>(
		
		<div className="cont d-flex flex-column align-items-center justify-content-center">
			<div className='d-flex flex-row'>
				<p className='not'> 404 This page is not available </p>
				<Fa icon="exclamation-triangle" size='2x'/>
			</div>
			<Link to='/'>
				<div className="d-flex flex-column">
					 <h2> Head back to home </h2>
					 <Fa icon='home' size='4x'className='tc'/>
				</div>
			 </Link>
		</div>


	) 