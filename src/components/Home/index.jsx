import React from "react";
import { RootContainer, Link } from "../Styles";

import { ComponentArray } from "../Body/componentArray";
import { LetterButton, LinkContainer, Letter, LinkSection, LetterContainer } from "./style";

const Home = () => {
	return (
		<RootContainer>
            <LetterContainer>
                {[...new Set(ComponentArray.map(item => item.name[0].toUpperCase()))].map(letter => (
                    <LetterButton key={letter} href={`#${letter}`}>
                        {letter}
                    </LetterButton>
                ))}
            </LetterContainer>
            
            <LinkContainer>
                {[...new Set(ComponentArray.map(item => item.name[0].toUpperCase()))].map(letter => (
                    <LinkSection id={letter}>
                        <Letter>{letter}</Letter>
                        {ComponentArray.filter(item => item.name.toUpperCase()[0] === letter).map(item => (
                            <Link href={item.link} style={{margin:"1rem"}}>{item.name}</Link>    
                        ))}
                    </LinkSection>
                ))}
            </LinkContainer>
		</RootContainer>
	);
};


export default Home;
