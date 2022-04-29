import React from "react";

import { Component, ComponentTitle, RootContainer } from "../Styles";

import "./index.css";

const NotificationBell = () => {
	return (
		<RootContainer>
			<ComponentTitle>Notification Bell</ComponentTitle>
			<Component>
                <div className="icon-wrapper" data-number="1">
                    <i className="fa-solid fa-bell bell-icon"></i>
                </div>
            </Component>
		</RootContainer>
	);
};

export default NotificationBell;
