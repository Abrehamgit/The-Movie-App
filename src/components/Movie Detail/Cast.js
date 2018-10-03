import React from "react";

const Cast = props => {
	if (props.cast.length === 0) {
		return (
			<div className="d-flex justify-content-center sorry">
				<h4> Sorry we cannot find the movie actors </h4>
			</div>
		);
	} else {
		return (
			<div className="d-flex flex-row justify-content-center cast-container">
				{props.cast.map(actor => (
					<div>
						<a
							href={`https://en.wikipedia.org/wiki/${actor.name}`}
							target="blank"
						>
							<img
								src={`https://image.tmdb.org/t/p/w200/${
									actor.profile_path
								}`}
								alt="actor"
								className="castImg grow"
								placeholder={
									"http://via.placeholder.com/300x300"
								}
							/>
						</a>
						<h5 className="text-center"> {actor.name}</h5>
					</div>
				))}
			</div>
		);
	}
};

export default Cast;
