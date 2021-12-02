import React from "react";
import {Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';

const TarotCard = ({card}) => {
  console.log(card);
  const {name, symbols, description} = card;
  let {imageURL} = card;

  if (name === 'The Wheel of Fortune') {
    imageURL = 'https://indiealchemy.com/apis/plateautarot/images/Wheel%20of%20Fortune.jpg'
  }

  return (
    <Card sx={{ maxWidth: 300}}>
      <CardMedia component="img" height="527" image={imageURL} alt={name}/>
      <CardContent>
        <CardHeader title={name}/>
        <Typography variant="body1" color="text.secondary">
          {symbols}
        </Typography>
        <Typography variant="body3">{description}</Typography>
      </CardContent>
    </Card>
  )
};

export default TarotCard;