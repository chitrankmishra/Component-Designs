import React from "react";
import styled from "styled-components";
import { Theme } from "../../assets/theme";

export const TitleContainer = styled.div`
    display: flex;
    padding: 2rem 2rem 6rem 2rem;
    background: ${Theme.lightGrey};
`;

export const Title = styled.h1`
    color: ${Theme.darkGrey};
    text-align: left;
`;