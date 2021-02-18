import Card from '../Card'
import './App.css'
import React, { useState, useEffect } from 'react'
import getAllCharacters from '../../services/getAllCharacters'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters({
      url: 'https://rickandmortyapi.com/api/character',
      setCharacters,
    })
  }, [])

  return (
    <>
      <div className="App">
        {characters.map(item => (
          <Card
            key={item.id}
            name={item.name}
            species={item.species}
            image={item.image}
            gender={item.gender}
            status={item.status}
            location={item.origin.name}
          />
        ))}
      </div>
    </>
  )
}

export default App
