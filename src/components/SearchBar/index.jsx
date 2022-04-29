import React from "react";

import { Component, ComponentTitle, RootContainer } from "../Styles";

import "./index.css";

const SearchBar = () => {
	return (
		<RootContainer>
			<ComponentTitle>Search Bar</ComponentTitle>
			<Component>
				<div className="search-bar">
					<input type="text" placeholder="Search" />
					<a href="#" className="icon">
						<i className="fa fa-search"></i>
					</a>
				</div>
			</Component>
		</RootContainer>
	);
};

export default SearchBar;
