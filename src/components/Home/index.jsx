import React from "react";
import { RootContainer, Heading, Link, ListItem, UnorderedList, ComponentTitle, Component } from "../Styles";

import { ComponentArray } from "../Body/componentArray";

const Home = () => {
	return (
		<RootContainer>
			<ComponentTitle>Component Designs</ComponentTitle>
            <Component>
                {ComponentArray.map(item => (
                    <Link href={item.link} style={{margin:"1rem"}}>{item.name}</Link>    
                ))}
            </Component>
		</RootContainer>
	);
};


export default Home;
