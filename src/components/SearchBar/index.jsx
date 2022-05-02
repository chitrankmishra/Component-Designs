import React from "react";

import { ComponentContainer, ComponentTitle, RootContainer } from "../Styles";

import { SearchBar, SearchIcon, SearchInput } from "./style";

const Component = () => {
	return (
		<RootContainer>
			<ComponentTitle>Search Bar</ComponentTitle>
            
			<ComponentContainer>
				<SearchBar>
					<SearchInput type="text" placeholder="Search" />
					<SearchIcon href="#">
						<i className="fa fa-search"></i>
					</SearchIcon>
				</SearchBar>
			</ComponentContainer>
		</RootContainer>
	);
};

export default Component;
