import Card from './Card'
import Header from './Header'
import './App.css'
import React, { useState, useEffect } from 'react'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters()
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, ...data.results])
        const nextUrl = data.info.next
        nextUrl && getAllCharacters(nextUrl)
      })
  }

  return (
    <>
      <Header title="Rick and Morty" />
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
