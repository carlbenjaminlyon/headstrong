import React, { useEffect, useState } from 'react';
// import {Line} from 'react-chartjs-2';
import moment from 'moment';

import { Plugin } from "@devexpress/dx-react-core";

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
import { ArgumentScale, Animation, ValueScale } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  line,
} from 'd3-shape';
import { scalePoint } from 'd3-scale';
import { render } from 'react-dom';
import { ClassNames } from '@emotion/react';
import axios from 'axios';
import { SwitchVideoTwoTone } from '@material-ui/icons';


const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
    .x(({ arg }) => arg)
    .y(({ val }) => val)
    .curve(curveCatmullRom)}/>
);

const titleStyles = {
  title: {
    textAlign: 'center',
    width: '100%',
    marginBottom: '10px'
  },
};

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row'
  },
});

const legendRootBase = ({classes, ...restProps}) => (
  <Legend.Root {...restProps} className={classes.root} />
);

const Root = withStyles(legendStyles, {name: 'LegendRoot'})(legendRootBase);


const Graph = ({ allEntries }) => {

  return (
    <>
    <Chart data={allEntries}>
      <ValueScale name="mood" />
      <ArgumentAxis showGrid={true} showLine={true} showTicks={true} showLabels={true}/>
      <ValueAxis valueType="mood" />
      <ArgumentScale factory={scalePoint}/>
        <LineSeries valueField="mood" argumentField="createdAt" name="Your mood" seriesComponent={Line} />
        <Legend position='bottom' rootComponent={Root}/>
        {/* <otherSet /> */}
      <Title text="Moody!" />
      <Animation />
    </Chart>
    </>
  );
};

export default Graph;

//Resources
//https://devexpress.github.io/devextreme-reactive/react/chart/demos/line/spline/
//https://www.npmjs.com/package/@devexpress/dx-react-chart-material-ui



