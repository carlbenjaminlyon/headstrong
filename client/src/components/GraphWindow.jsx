import React, { useState } from 'react';
import Graph from './Graph.jsx';

//MUI
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

//need to get react-sprint/web package here

//Modal style



const GraphWindow = ({ data, onLoad }) => {
  //I could've done this all in one, but let's be honest, styling is nice.


  return (
    <>
      <Paper>
        <Graph data={data} onLoad={onLoad}/>
      </Paper>
  </>
  );
};

export default GraphWindow;