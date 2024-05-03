import "./Card.css"

// eslint-disable-next-line react/prop-types
const Card = ({ title, description}) => {
  return (
    <div className="card">
        <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" alt="" width={309} style={{border: "2px solid black"}}/>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default Card