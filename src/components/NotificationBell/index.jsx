import React from "react";

import { ComponentContainer, ComponentTitle, RootContainer } from "../Styles";

import { Icon, IconContainer } from "./style";

const Component = () => {
	return (
		<RootContainer>
			<ComponentTitle>Notification Bell</ComponentTitle>
			<ComponentContainer>
                <IconContainer data-number="1">
                    <Icon className="fa-solid fa-bell"></Icon>
                </IconContainer>
            </ComponentContainer>
		</RootContainer>
	);
};

export default Component;
