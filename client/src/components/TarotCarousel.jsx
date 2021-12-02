import React, {useState} from "react";
import Carousel from 'react-material-ui-carousel';
import axios from "axios";
import TarotCard from "./TarotCard.jsx";

const TarotCarousel = () => {
  const [deck, changeDeck] = useState([]);

  const drawDeck = (num) => {
    axios.post('/api/tarot', {num: num})
      .then(({data}) => {
        console.log(data);
        changeDeck(data);
      })
      .catch(err => console.error(err));
  };

  const handleClick = (e) => {
    e.preventDefault();
    drawDeck(e.currentTarget.value);
  };

  return (
    <div>
      <button onClick={handleClick} value={1}>Draw 1</button>
      <button onClick={handleClick} value={3}>Draw 3</button>
      <button onClick={handleClick} value={7}>Draw 7</button>
      {
        !!deck && <Carousel>
          {deck.map(card => {
            <TarotCard card={card} />
          })}
        </Carousel>
      }
    </div>
  );
};

export default TarotCarousel;