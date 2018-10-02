import React from "react";
import { Consumer } from "../../context/MyProvider";
import MovieCard from "../New Movies/MovieCard";

export const SearchList = () => (
	<div>
		<Consumer>
			{context => {
				context.SearchedMovies.map(movie => (
					<MovieCard
						title={movie.title}
						path={movie.poster_path}
						overview={movie.overview}
						Id={movie.id}
					/>
				));
			}}
		</Consumer>
	</div>
);
