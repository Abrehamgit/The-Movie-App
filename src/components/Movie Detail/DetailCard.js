import React from "react";
import "./MovieDetail.css";

const DetialCard = ({ overview, release_date, title, genre, rating }) => (
	<div className="details">
		<div className="small-card">
			<h1>
				<span>Title : </span>
				{title}
			</h1>
		</div>
		<div className="small-card overview">
			<h5>
				<span className="overview">Overview : </span>
				{overview}
			</h5>
		</div>
		<div className="small-card">
			<h5>
				<span>Release date : </span>
				{release_date}
			</h5>
		</div>
		<div className="small-card">
			<h5>
				{" "}
				<span> Rating : </span> {rating}{" "}
			</h5>
		</div>
		<div className="small-card">
			<h5>
				<span>Genre : </span> {genre}
			</h5>
		</div>
	</div>
);

export default DetialCard;
