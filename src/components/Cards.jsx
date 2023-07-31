import { cardsData } from "../data";
import '../styles/cards.scss';

const Cards = () => (
  <section className="cards-section">
    {cardsData.map((card)=> {
      const { img, title, description, description2, description3, description4 } = card
    return (
     <div className="card-container" key={title}>
      <img className="card-image" alt='office' src={img}/>
      <div className="card-details">
        <h2>{title}</h2>
        <ul>
          <li>{description}</li>
          {description2 ? <li>{description2}</li> : ''}
          {description3 ? <li>{description3}</li> : ''}
          {description4 ? <li>{description4}</li> : ''}
        </ul>
      </div>
    </div>
    )
    })
    }
  </section>
);


export default Cards;