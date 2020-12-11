

import React, { useState, useEffect}  from 'react'
import axios from 'axios'
import CharacterList from './components/CharacterList'
import styled from 'styled-components'

const StyledApp = styled.div`
background-color:black;
border:25px green solid;
padding:4rem;
margin:0;
`

function App() {
  const  [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((res) =>{
        console.log(res.data)
        setCharacters(res.data.results)
    })
  },[])

  return (
    <StyledApp>
    {/* {characters.map(character => {
      return <p>{character.name}</p>
    })} */}
    <CharacterList characters={ characters } />
    </StyledApp>
  );
}

export default App;
