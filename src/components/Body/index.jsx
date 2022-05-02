import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BodyContainer } from "../Styles";
import { TitleContainer, Title } from "./style";

import Home from "../Home";
import { ComponentArray } from "./componentArray";

const Body = () => {
	return (
		<BodyContainer>
            <TitleContainer>
                <Title>
                    <i className="fa-solid fa-puzzle"></i>
                    Component Designs
                </Title>
            </TitleContainer>
            
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
                    {ComponentArray.map(item => (
                        <Route key={item.name} path={item.link} element={item.component} />
                    ))}
				</Routes>
			</Router>
		</BodyContainer>
	);
};

export default Body;
