import Card from '../Card'
import Sidebar from '../Sidebar'
import './App.css'
import React, { useState, useEffect } from 'react'
import getAllCharacters from '../../services/getAllCharacters'

function App() {
  const [characters, setCharacters] = useState([])
  const [userInput, setUserInput] = useState('')
  const [likedCharacters, setLikedCharacters] = useState([])
  const [isSidebarShown, setSidebarShown] = useState(false)

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  function likeCharacter(currentId) {
    let newArray
    if (likedCharacters.includes(currentId)) {
      newArray = likedCharacters.filter(id => id !== currentId)
    } else {
      newArray = [...likedCharacters, currentId]
    }
    setLikedCharacters(newArray)
    console.log(newArray)
  }

  return (
    <div className="App">
      <Sidebar
        title={'I am a sidebar'}
        setSidebarShown={setSidebarShown}
        isSidebarShown={isSidebarShown}
      />
      <div className="App__filterSection">
        <button
          className="App__sidebarOpener"
          onClick={() => setSidebarShown(!isSidebarShown)}
        >
          Open Filters
        </button>

        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
          className="App__inputSearchCharacter"
          placeholder="Search character..."
        />
      </div>

      {characters
        .filter(character =>
          character.name.toLowerCase().includes(userInput.toLowerCase())
        )
        .map(item => (
          <Card
            character={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
            gender={item.gender}
            status={item.status}
            location={item.origin.name}
            likeCharacter={likeCharacter}
            likedCharacters={likedCharacters}
          />
        ))}
    </div>
  )
}

export default App

/*         .filter(
          character =>
            filteredSpecies === 'all' || character.species === filteredSpecies
        ) */
