import React from "react";
import styled from "styled-components";

export const SearchInput = styled.input`
	width: 0;
	border: none;
	outline: none;
	padding: 0;
	background: none;
	font-size: 1.1rem;
	transition: 0.5s ease;
	line-height: 40px;
	color: #ffffff;
`;

export const SearchIcon = styled.a`
	color: #21dfcd;
	float: right;
	width: 40px;
	font-size: 1.3rem;
	height: 40px;
	border-radius: 50%;
	background: #2f3640;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.4s;
	cursor: pointer;
	text-decoration: none;
    &:hover{
	    transform: rotate(360deg) scale(0.8);
    }
`;

export const SearchBar = styled.div`
	position: relative;
	align-self: center;
	background: #2c3441;
	height: 40px;
	border-radius: 40px;
	padding: 10px;
    &:hover>${SearchInput}{
        width: 200px;
        padding: 0 10px;
    }
    &:hover>${SearchIcon}{
	    background: #536179;
    }
`; 