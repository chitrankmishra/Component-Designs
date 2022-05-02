import React from "react";
import styled from "styled-components";
import { Theme } from "../../assets/theme";

export const LetterContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0.5rem 0;
    justify-content: center;
`;

export const LetterButton = styled.a`
    height: fit-content;
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 14px;
    color: ${Theme.darkGrey};
    background: ${Theme.lightGrey};
    border: 2px solid ${Theme.darkGrey};
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.1s ease-in-out;
    :hover{
        background: ${Theme.darkGrey};
        color: ${Theme.white};
        transform: scale(1.3);
    }
`;

export const Letter = styled.div`
    font-size: 20px;
    margin: 1rem;
`;

export const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex:1;
`;

export const LinkSection = styled.div`
    padding: 2rem;
`;
