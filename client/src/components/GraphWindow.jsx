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
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


//need to get react-sprint/web package here

//Graph window style
const boxStyle = {
  elevation: 4,
  border: '2px solid #8A2BE2',
  p: 4,
  m: 4,
};


const GraphWindow = ({ entries, allEntries }) => {
  const [view, setView] = useState();

  const handleView = () => {

  };

  return (
    <>
    <Container>
      <Box style={boxStyle}>
      <Switch defaultChecked color="secondary"/>
        <Typography>
          Text
        </Typography>
      </Box>
      <Box style={boxStyle}>
        <Graph entries={entries} allEntries={allEntries}/>
      </Box>
    </Container>
  </>
  );
};

export default GraphWindow;