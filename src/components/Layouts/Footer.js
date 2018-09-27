import React from 'react';
import {Fa} from 'mdbreact';
import './Header.css'
const Footer = () =>(
		<div  className='d-flex flex-column align-items-center footerr '>
			<p> 
				Developed by 
				<a href='https://twitter.com/AbrehamGezaheg1' target='blank'> 
					Abreham
					 <Fa icon= 'twitter' size='2x' />
				</a>
			</p>
			<a href='https://github.com/Abrehamgit/The-Movie-App' target='blank'>
				 View the code on github <Fa icon='github' size='2x' />
		     </a>
		</div>

	)

export default Footer;