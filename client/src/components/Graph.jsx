import React, { useEffect, useState } from 'react';
// import {Line} from 'react-chartjs-2';
import moment from 'moment';


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
import { render } from 'react-dom';
import { ClassNames } from '@emotion/react';
import axios from 'axios';


const dummyData = [
  {day: 0, mood: 10},
  {day: 1, mood: 15},
  {day: 2, mood: 25},
  {day: 3, mood: 55},
  {day: 4, mood: 60},
  {day: 5, mood: 40},
  {day: 6, mood: 30}
];

const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
    .x(({ arg }) => arg)
    .y(({ val }) => val)
    .curve(curveCatmullRom)}/>
);

const Graph = ({ data, onLoad }) => {

  const [userMoodData, setUserMoodData] = useState(data);
  const [allMoodData, setAllMoodData] = useState(onLoad);
  const [rendered, setRendered] = useState(true);


  const moodTimeModifiy = (allMoodData) => {
    const modified = allMoodData.reduce((array, post) => {
      array.push({day: moment(post.createdAt).format("MMM Do YY"), createdAt: post.createdAt, mood: post.mood});
      return array;
      }, []);
    setAllMoodData(modified);
  };

  useEffect(() => {
    if (rendered) {
      setRendered(false);
      moodTimeModifiy(onLoad);
    }
    console.log('allMoodData', allMoodData);

  }, [rendered, moodTimeModifiy])

  return (
    <>
    <Chart data={allMoodData}>
      <ArgumentAxis showGrid={true} showLine={true} showTicks={true} showLabels={true}/>
      <ArgumentScale />
      <LineSeries valueField="mood" argumentField="createdAt" seriesComponent={Line} />
      <Title text="Moody!" />
      <Animation />
    </Chart>
    </>
  );
};


//Resources
//https://devexpress.github.io/devextreme-reactive/react/chart/demos/line/spline/
//https://www.npmjs.com/package/@devexpress/dx-react-chart-material-ui



export default Graph;



