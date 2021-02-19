import './Card.css'
import { useState } from 'react'

function Card({ name, species, image, gender, status, location }) {
  const [isDetailsShown, setDetailsShown] = useState(false)

  return (
    <>
      <section className="scroller">
        <div class="box">
          {name} {species === 'Human' ? '👤' : '👽'}
          <br /> &rarr;
        </div>
        <div class="box">
          <img className="Card__characterImg" src={image} alt="" />
        </div>
        <div class="box">
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
        </div>
      </section>
    </>
  )
}

export default Card

/* 
import './Card.css'
import { useState } from 'react'

function Card({ name, species, image, gender, status, location }) {
  const [isDetailsShown, setDetailsShown] = useState(false)

  return (
    <>
      <section className="Card">
          {name} {species === 'Human' ? '👤' : '👽'}
          <img className="Card__characterImg" src={image} alt="" />
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
      </section>
    </>
  )
}

export default Card
*/
