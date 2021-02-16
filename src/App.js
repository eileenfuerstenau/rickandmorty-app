import data from './rickandmortyapi.json'
import Card from './Card'
import './App.css'

function App() {
  return (
    <div className="App">
      {data.results.map(item => (
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
  )
}

export default App
