import React from 'react'
import CharacterCard from './CharacterCard'
import styled from 'styled-components'

const StyledPage = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
justify-content:space-evenly;
width:100%;
`
export default function CharacterList(props){

    const { characters } = props;

    
    return (
        <StyledPage>
        {characters.map( character => { return <CharacterCard character={character} key={character.id} /> } ) }
        </StyledPage>
    )
}


