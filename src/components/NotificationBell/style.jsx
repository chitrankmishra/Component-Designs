import React from "react";
import styled, {keyframes} from "styled-components";

const shake = keyframes`
    10% {
        transform: rotate(15deg);
    }
    20% {
        transform: rotate(-15deg);
    }
    30% {
        transform: rotate(15deg);
    }
    50% {
        transform: rotate(0deg);
    }
`;

export const Icon = styled.i`
    font-size: 40px;
`;

export const IconContainer = styled.div`
    width:50px;
    height:50px;
    position:relative;
    ::after{
        content:attr(data-number);
        width:20px;
        height:20px;
        background-color: #d32b2b;
        color:#ffffff;
        display:grid;
        place-content: center;
        border-radius: 50%;
        position:absolute;
        top: -5px;
        right:0;
        transform: translateY(3px);
    }
    :hover::after{
        transform: translateY(0);
        transition: opacity .25s, transform .25s;
    }
    &:hover>${Icon}{
        animation: ${shake} 1s forwards;
    }
`;
