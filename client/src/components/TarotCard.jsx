import React from "react";
import {Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';

const TarotCard = ({card, index}) => {
  const {name, symbols, description} = card;
  let {imageURL} = card;

  // the API provides a broken link for the image of this card
  if (name === 'The Wheel of Fortune') {
    imageURL = 'https://indiealchemy.com/apis/plateautarot/images/Wheel%20of%20Fortune.jpg'
  }
  const timeFrame = ['Past', 'Present', 'Future']

  return (
    <Card sx={{ width: 300}}>
      <CardHeader title={timeFrame[index]} className='time-frame'/>
      <CardMedia component="img" maxHeight="527" image={imageURL} alt={name}/>
      <CardContent>
        <CardHeader title={name} className='tarot-name'/>
        <Typography variant="body1" color="text.secondary" className='tarot-symbols'>{symbols}</Typography>
        <br />
        <Typography variant="body3">{description}</Typography>
      </CardContent>
    </Card>
  )
};

export default TarotCard;