import React from "react";
import {Paper, Button} from '@mui/material';

const TarotCard = (props) => {
  const {name, symbols, imageURL, description} = props.card;

  return (
    <Paper>
      <h2>{name}</h2>
      <img src={imageURL}/>
      <big>{symbols}</big>
      <p>{description}</p>
    </Paper>
  )
};

export default TarotCard;