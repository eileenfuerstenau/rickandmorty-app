import './Card.css'

function Card({ name, species, image }) {
  return (
    <>
      <section className="Card">
        {name} {species === 'Human' ? '👤' : '👽'}
        <img className="characterImg" src={image} alt="" />
      </section>
    </>
  )
}

export default Card
