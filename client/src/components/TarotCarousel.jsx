import React, {useState} from "react";
import axios from "axios";
import TarotCard from "./TarotCard.jsx";
import { Grid, Button, Box, Container } from "@mui/material";

const TarotCarousel = () => {
  const [deck, changeDeck] = useState([]);

  const drawDeck = (num) => {
    axios.post('/api/tarot', {num})
      .then(({data}) => {
        changeDeck(data);
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
        {/* <Button onClick={handleClick} value={1} variant="contained">Draw 1</Button> */}
        <Button onClick={handleClick} value={3} variant="contained">Draw Cards</Button>
        {/* <Button onClick={handleClick} value={5} variant="contained">Draw 5</Button> */}
      </div>
      {
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}  className='tarot-cards'>
              {
                !!deck && deck.map((card, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4}>
                      <TarotCard card={card} key={card.id} index={index}/>
                    </Grid>
                  );
                })
              }
            </Grid>
          </Box>
        </Container>
      }
    </>
  );
};

export default TarotCarousel;