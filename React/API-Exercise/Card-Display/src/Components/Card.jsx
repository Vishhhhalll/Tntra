import { useState, useEffect } from "react"

const Card = () => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          let cardData = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          if (!cardData.ok) {
            throw new error("Network response was not ok!");
          }
  
          let data = await cardData.json();
          setCards(data);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
  return (
    <>
       <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>
                <b>User:</b>
                {card.userId}
              </h1>
              <p>
                <b>Card:</b>
                {card.title}
              </p>
              <span>
                <b>Body:</b>
                {card.body}
              </span>
            </div>
          );
        })}
      </div>
            </>
  )
}

export default Card