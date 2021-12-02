import React, {useState} from "react";
import axios from "axios";
import TarotCard from "./TarotCard.jsx";
import { Grid, Button } from "@mui/material";

const TarotCarousel = () => {
  const [deck, changeDeck] = useState([]);

  const drawDeck = (num) => {
    axios.post('/api/tarot', {num})
      .then(({data}) => {
        changeDeck(data);
        console.log('then', deck);
      })
      .catch(err => console.error(err));
  };

  const handleClick = (e) => {
    e.preventDefault();
    drawDeck(e.currentTarget.value);
  };

  return (
    <>
      <div className='tarot-card-buttons' justify="center">
        <Button onClick={handleClick} value={1}>Draw 1</Button>
        <Button onClick={handleClick} value={3}>Draw 3</Button>
        <Button onClick={handleClick} value={7}>Draw 7</Button>
      </div>
      {
        <Grid container spacing={2} className='tarot-cards' justify="center">
          {
            !!deck && deck.map(card => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <TarotCard card={card} key={card.id}/>
                </Grid>
              );
            })
          }
        </Grid>
      }
    </>
  );
};

export default TarotCarousel;