import React from "react";
import { Consumer } from "../../context/MyProvider";
import MovieCard from "../New Movies/MovieCard";
import { Fa } from "mdbreact";
import Footer from "../Layouts/Footer";

export const SearchList = () => (
	<div>
		<Consumer>
			{context => (
				<div className="tc">
					<button
						type="button"
						className="btn btn-elegant"
						onClick={context.clearSearch}
					>
						Back
					</button>
				</div>
			)}
		</Consumer>
		<div className="d-flex justify-content-center flex-wrap">
			<Consumer>
				{context => {
					if (
						context.SearchedMovies.length !== 1 &&
						!context.searchAll
					) {
						return (
							<div>
								<Fa icon="spinner" spin size="4x" />
							</div>
						);
					} else {
						return context.SearchedMovies.map(movie => (
							<MovieCard
								title={movie.title}
								path={movie.poster_path}
								overview={movie.overview}
								Id={movie.id}
								key={movie.id}
							/>
						));
					}
				}}
			</Consumer>
		</div>

		<Footer />
	</div>
);
