import styled from "styled-components";
import media from "styled-media-query";

import { Heading } from "./text";
import { Theme } from "../../assets/theme";

export const ComponentContainer = styled.div`
	border-radius: 10px;
    margin-top: 1rem;
	padding: 1rem;
	justify-content: center;
	text-align: center;
	align-self: center;
`;

export const ComponentTitle = styled(Heading)`
    margin: 0;
    padding: 2rem 0;
    background: ${Theme.primary};
    box-shadow: 0px 0px 10px 0px ${Theme.secondary};
    color: ${Theme.lightText};
	text-align: center;
`;

export const ComponentText = styled(Heading)`
    width:60%;
    word-wrap: break-word;
	text-align: center;
    color: ${Theme.primary};
`;
