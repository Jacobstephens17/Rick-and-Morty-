import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
border:1rem green solid;
margin:2rem 2rem;
background-color:black;
color:green;
width:14%;
display:flex;
flex-wrap:wrap;
max-width:100%;
padding:4rem 2rem;

&:hover{
    transform:scale(1.3);
}
`

const StyledIdentifier = styled.span`
color:red;
font-weight:bolder;
font-size:2rem;
`


export default function CharacterCard(props){
    const { character, name, image, origin, gender, species, status } = props;

    return(
        <StyledCard>
            {/* {character.map( character => { return <CharacterCard character={character} key={character.id} /> } ) } */}
            <h1><StyledIdentifier>Name: </StyledIdentifier>{character.name} </h1>
            <h2><StyledIdentifier>Gender: </StyledIdentifier>{character.gender}</h2>
            <img className='profilePic'src={character.image} alt=''/>
            <h2><StyledIdentifier>Species: </StyledIdentifier>{character.species}</h2>
            <h3><StyledIdentifier>Location/Dimension: </StyledIdentifier>{character.origin.name}</h3>
            <p><StyledIdentifier>Status: </StyledIdentifier>{character.status}</p>
        </StyledCard>
    )
}