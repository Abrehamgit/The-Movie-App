import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.css";
import DetailCard from "./DetailCard";
import { ApiKey } from "../../config";
import Cast from "./Cast";
import { Fa } from "mdbreact";
import Footer from "../Layouts/Footer";
import axios from "axios";

class MovieDetail extends Component {
	constructor() {
		super();
		this.state = {
			movie: {},
			genres: [],
			cast: []
		};
	}

	componentDidMount() {
		const { Id } = this.props.location.state;
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${Id}?api_key=${ApiKey}&language=en-US&append_to_response=credits`
			)
			.then(response => {
				console.log(response.data);
				this.setState({
					movie: response.data,
					genres: response.data.genres.map(item => item.name),
					cast: response.data.credits.cast.slice(0, 4)
				});
				console.log(this.state.genres);
			});
	}

	render() {
		const { movie } = this.state;
		console.log(this.state.genres);
		if (movie == {}) {
			return <Fa icon="spinner" spin />;
		} else {
			return (
				<div>
					<div className="d-header">
						<Link to="/">
							{" "}
							<Fa
								icon="backward"
								size="4x"
								className="icon"
							/>{" "}
						</Link>
					</div>
					<div className="detail-container">
						<div className="d-img">
							<img
								src={`https://fmovies.cc/wp-content/uploads/2018/09/${
									movie.poster_path
								}`}
								className="rounded "
							/>
						</div>
						<DetailCard
							overview={movie.overview}
							release_date={movie.release_date}
							title={movie.title}
							genre={this.state.genres[0]}
							rating={movie.vote_average}
						/>
					</div>
					<Cast cast={this.state.cast} />
					<div>
						<Footer />
					</div>
				</div>
			);
		}
	}
}

export default MovieDetail;
