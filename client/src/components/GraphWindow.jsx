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


//need to get react-sprint/web package here

//Graph window style
const boxStyle = {
  elevation: 4,
  border: '2px solid #8A2BE2',
  p: 4,
  m: 4,
};
  // const moodTimeModifiy = (posts) => {
  //   const modified = posts.reduce((array, post) => {
  //     array.push({day: moment(post.createdAt).calendar(), createdAt: post.createdAt, mood: post.mood, name:post.username});
  //     return array;
  //     }, []);
  //   setData(modified);
  // };

const GraphWindow = ({ entries, allEntries }) => {
  const [data, setData] = useState(entries);
  const [weather, setWeather] = useState(null);
  const [view, setView] = useState(false);
  const [showView, setShowView] = useState(true);


  const handleView = () => {
    if (view) {
      // setData(allEntries)
      setView(false)
      // console.log('allEntries from graphwindow', data)
      console.log('view from graphwindow', view)

    } else {
      // setData(entries);
      setView(true);
      // console.log('entries from graphwindow', data)
      console.log('view from graphwindow', view)

    }
  };



  useEffect(() => {
      // moodTimeModifiy(entries)
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
      <Switch defaultChecked color="secondary" onChange={handleView} />
        <Typography>
          Hello, {data.username}. We hope you are well today!
        </Typography>
      </Box>
      <Box style={boxStyle}>

      {/* {view === true ? <Graph allEntries={entries}/> : <Graph allEntries={allEntries}/>} */}
       {!showView ? null : <Graph allEntries={view ? entries : allEntries} />}
       {/* <Graph allEntries={data} /> */}

      </Box>
    </Container>
  </>
  );
};

export default GraphWindow;