import React, { useEffect, useState } from 'react';
import {Line} from 'react-chartjs-2';


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

// const Line = props => (
//   <LineSeries.Path
//     {...props}
//     path={line()
//     .x(({ arg }) => arg)
//     .y(({ val }) => val)
//     .curve(curveCatmullRom)}/>
// );

const Graph = ({ data, onLoad }) => {

  const [userMoodData, setUserMoodData] = useState();
  const [allMoodData, setAllMoodData] = useState();
  const [currentUser, setCurrentUser] = useState();




  // const chart = () => {
  //   setMoodData({
  //     labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
  //     datasets: [
  //       {
  //         label: 'Mood',
  //         data: [22, 45, 66, 72, 80, 55, 60],
  //         backgroundColor: ['rgba(192, 178, 205, 0.6)'],
  //         borderWidth: 4
  //       }
  //     ]
  //   })
  // };


  useEffect(() => {
    setUserMoodData(data);
    setAllMoodData(onLoad);
  },[])


  const toggleView = () => {

  };

  // const handleGraph = () => {
  //   //for each post, plot a new point on the graph from a scale of 1-100
  //   //axios.get mood data from each post made for the current user (right now just chart with the dummyData)
  //   moodData.forEach(day => {});
  // };

  // useEffect(() => {
  //   handleGraph();
  // }, []);

  return (
    <>
    <Chart data={userMoodData}/>
    </>
  );
};


//Resources
//https://devexpress.github.io/devextreme-reactive/react/chart/demos/line/spline/
//https://www.npmjs.com/package/@devexpress/dx-react-chart-material-ui



export default Graph;




// class App extends Component {
//   constructor(props) {
//   this.state = {
//     modal: false,
//   };
//   this.handleModal = this.handleModal.bind(this);
// }

//   handleModal() {
//   this.setState(prevState => {
//     return {modal: !prevState.modal}
//     });
//   };

//   render() {
//     const { handleModal } = this;
//     const { modal } = this.state;
//     return (
//       <div>
//         <Modal isOpen={modal} onClick={handleModal}/>
//       </div>
//     );
//   }
// }

// // //---------------------------------------------
// const Modal = ({ isOpen, onClick }) => {
//   const [modelOpen, setModalOpen] = useState(false);

//   return(
//     <div>
//       <Modal>
//         <MoreStuffHere />
//       </Modal>
//     </div>
//   );
// };



// //----------------------------------
// import { useState } from "react";

// function Btn({ isOpen, onClick, children }) {
//   return (
//     <div>
//       <button onClick={onClick}>Clicky</button>
//       <div className={isOpen ? "open" : "closed"}>{children}</div>
//     </div>
//   );
// }

// export default function App() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [name, setName] = useState("Billy");
//   function handleModal() {
//     setModalOpen(!modalOpen);
//   }
//   return (
//     <div className="App">
//       <Btn isOpen={modalOpen} onClick={handleModal}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </Btn>
//     </div>
//   );
// }
