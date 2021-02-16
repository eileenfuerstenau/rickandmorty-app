import './Card.css'

function Card({ name, species, image }) {
  return (
    <section className="Card">
      <h1>{name} </h1> Species: {species}
      <img className="characterImg" src={image} alt="" />
    </section>
  )
}

export default Card
