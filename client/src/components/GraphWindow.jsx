import React, { useEffect, useState } from 'react';
import Graph from './Graph.jsx';
import moment from 'moment';

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
import { SelectionState } from '@devexpress/dx-react-chart';
import Tooltip from '@mui/material/Tooltip';


//need to get react-sprint/web package here

//Graph window style
const boxStyle = {
  elevation: 4,
  border: '2px solid #8A2BE2',
  p: 4,
  m: 4,
};

const GraphWindow = ({ entries, allEntries }) => {
  const [data, setData] = useState(entries);
  const [weather, setWeather] = useState(null);
  const [view, setView] = useState(false);
  const [showView, setShowView] = useState(true);


  const handleView = () => {
    if (view) {
      setView(false)
    } else {
      setView(true);
    }
  };

  useEffect(() => {
      setShowView(false);
      setData(view ? entries : allEntries);
      setTimeout(() => {
        setShowView(true);
      })
      console.log({entries, allEntries})
  }, [view]);

  return (
    <>
    <Container>
      <Box style={boxStyle}>
        <Tooltip title='Toggle views' placement='right' arrow>
      <Switch defaultChecked color="secondary" onChange={handleView} />
        </Tooltip>
        <Typography>
          Hello friend, we hope you are well today!
        </Typography>
      </Box>
      <Box style={boxStyle}>
       {!showView ? null : <Graph allEntries={view ? entries : allEntries} />}
      </Box>
    </Container>
  </>
  );
};

export default GraphWindow;