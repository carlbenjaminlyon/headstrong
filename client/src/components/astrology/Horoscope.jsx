import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Box, Card, CardHeader, CardMedia, CardContent, Typography} from '@mui/material';

const Horoscope = ({ sign, timeframe }) => {
  const [ horoscope, setHoroscope ] = useState([]);
  // sign, timeframe
  
  useEffect(() => {
    axios.get(`/api/astrology/${sign}&${timeframe}`)
    .then(({ data }) => setHoroscope(data))
    .catch(err => console.error(err));
  }, [sign, timeframe])
  
  return (
    <div>
      <Card 
      sx={{ maxWidth: 345 }}
      >
      <CardMedia
        component="img"
        alt="clouds"
        height="140"
        image="https://images.vexels.com/media/users/3/225748/raw/6845d44e9f29e4629776913603a0a328-mystical-astrology-pattern-design.jpg"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {timeframe}, {sign}:
      </Typography>
      <div>
      <Typography
        // variant="body2"
        // component="p"
        // align="center"
        // style={{ wordWrap: "break-word" }}
        variant="body2" color="text.secondary"
      >
       {horoscope}
      </Typography>
      </div>
      </CardContent>
      </Card>
    </div>

  )
}

export default Horoscope