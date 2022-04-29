import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BodyContainer } from "../Styles";

import Home from "../Home";
import { ComponentArray } from "./componentArray";

const Body = () => {
	return (
		<BodyContainer>
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
