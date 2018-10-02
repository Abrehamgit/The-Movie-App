import React from "react";

const Cast = props => (
	<div className='d-flex flex-row justify-content-center cast-container'>
		{props.cast.map(actor => (
			<div>
				<img
					src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
					alt=""
					className='castImg'
				/>
				<h5 className='text-center'> {actor.name}</h5>
			</div>
		))}
	</div>
);

export default Cast;
