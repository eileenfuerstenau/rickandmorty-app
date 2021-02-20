import './Card.css'
import { useState } from 'react'

function Card({
  name,
  species,
  image,
  gender,
  status,
  location,
  likeCharacter,
  likedCharacters,
  character,
}) {
  const [isDetailsShown, setDetailsShown] = useState(false)

  return (
    <>
      <section className="scroller">
        <div className="box">
          {name} {species === 'Human' ? '👤' : '👽'}
          <br /> &rarr;
        </div>
        <div className="box">
          <img className="Card__characterImg" src={image} alt="" />
        </div>
        <div className="box">
          <button onClick={() => setDetailsShown(!isDetailsShown)}>
            {isDetailsShown ? 'Hide' : 'Show more'}
          </button>
          <section hidden={!isDetailsShown}>
            <ul>
              <li> Gender: {gender} </li>
              <li> Status: {status} </li>
              <li> Origin: {location} </li>
            </ul>
          </section>
          <button onClick={() => likeCharacter(character)}>
            {likedCharacters.includes(character) ? 'Dislike 👎🏻' : 'Like 👍🏻'}
          </button>
        </div>
      </section>
    </>
  )
}

export default Card
