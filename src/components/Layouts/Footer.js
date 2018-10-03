import React from "react";
import { Fa } from "mdbreact";
import "./Header.css";
const Footer = () => (
	<div className="d-flex flex-column align-items-center footerr ">
		<p className="twitter-block">
			Developed by Abreham
			<a
				href="https://twitter.com/AbrehamGezaheg1"
				target="blank"
				className="links"
			>
				<Fa icon="twitter" size="lg" className="footer-icons" />
			</a>
		</p>
		<div className="d-flex flex-row">
			<p>View the code on github</p>
			<a
				href="https://github.com/Abrehamgit/The-Movie-App"
				target="blank"
				className="links"
			>
				<Fa icon="github" size="2x" className="footer-icons gitIcon" />
			</a>
		</div>
	</div>
);

export default Footer;
