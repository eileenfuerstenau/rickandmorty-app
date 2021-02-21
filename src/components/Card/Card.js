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
      <section className="Card__Scroller">
        <div className="Card__Box">
          {name} {species === 'Human' ? '👤' : '👽'}
          <br /> &rarr;
        </div>
        <div className="Card__Box">
          <img className="Card__characterImg" src={image} alt="" />
        </div>
        <div className="Card__Box">
          <button
            className="Card__Button"
            onClick={() => setDetailsShown(!isDetailsShown)}
          >
            {isDetailsShown ? 'Hide' : 'Show more'}
          </button>
          <section hidden={!isDetailsShown}>
            <ul className="Card__DetailsList">
              <li> Gender: {gender} </li>
              <li> Status: {status} </li>
              <li> Origin: {location} </li>
            </ul>
          </section>
          <button
            className="Card__Button"
            onClick={() => likeCharacter(character)}
          >
            {likedCharacters.includes(character) ? 'Dislike 👎🏻' : 'Like 👍🏻'}
          </button>
        </div>
      </section>
    </>
  )
}

export default Card
