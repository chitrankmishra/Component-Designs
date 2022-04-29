import styled from "styled-components";
import media from "styled-media-query";

import { Theme } from "../../assets/theme";

export const Heading = styled.h1`
	color: ${Theme.primary};
	font-size: 2rem;
`;

export const Link = styled.a`
	color: ${Theme.secondary};
    text-decoration: none;
    :before {
        content: "•";
        margin: 0 0.2rem;
    }
    :hover{
        color: ${Theme.highlight};
        :before {
            content: "→";
        }
    }
`;

export const UnorderedList = styled.ul`
	list-style: circle;
	padding: 0;
`;

export const ListItem = styled.li`
	padding: 0.5rem;
`;
