import React from "react";
import { Consumer } from "../../context/MyProvider";
import { Input } from "mdbreact";
import "./searchBox.css";

const SearchBox = props => {
	return (
		<div className="d-flex flex-column align-items-center">
			<Consumer>
				{context => {
					if (!context.searchAll) {
						return (
							<div className="search-container">
								<Input
									className="input"
									label="Search Latest Movies"
									type="search"
									name="movieSearch"
									icon="search"
									onChange={context.searchLhandle}
								/>
							</div>
						);
					}
				}}
			</Consumer>
			<Consumer>
				{context => (
					<Input
						className="input"
						label="Search All Movies"
						type="search"
						name="movieSearch"
						value={props.value}
						icon="search"
						onChange={context.searchAhandle}
					/>
				)}
			</Consumer>
		</div>
	);
};

export default SearchBox;
