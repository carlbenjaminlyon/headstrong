import React, { useEffect, useState } from 'react';


//MUI
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';


const Graph = () => {

  const [moodData, setMoodData] = useState();
  const [currentUser, setCurrentUser] = useState();


  const dummyData = [
    {day: 0, mood: 10},
    {day: 1, mood: 15},
    {day: 2, mood: 25},
    {day: 3, mood: 55},
    {day: 4, mood: 60},
    {day: 5, mood: 40},
    {day: 6, mood: 30}
  ];

  const handleGraph = () => {
    //for each post, plot a new point on the graph from a scale of 1-100
    //axios.get mood data from each post made for the current user (right now just chart with the dummyData)
    moodData.forEach(day => {});
  };

  useEffect(() => {
    handleGraph();
  }, []);

  return (
    <Paper>
      <Typography>
        Some text here.
      </Typography>
    </Paper>
  );
};


//Resources
//https://devexpress.github.io/devextreme-reactive/react/chart/demos/line/spline/
//https://www.npmjs.com/package/@devexpress/dx-react-chart-material-ui



export default Graph;