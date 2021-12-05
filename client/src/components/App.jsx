import React, { Component } from 'react';
import Entry from './Entry.jsx';
import Memory from './Memory.jsx';
import Resources from './Resources.jsx';
import Feed from './Feed.jsx';
import Board from './Board.jsx';
import axios from 'axios';
import Chat from './Chat.jsx';
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';
import Friends from './Friends.jsx';
import GoogleButton from 'react-google-button';
import css from './style.css';
import { AppBar, Button } from '@material-ui/core';
import avatar from '../images/avatar.png';
import Follow from './Follow.jsx';
import GraphWindow from './GraphWindow.jsx';
import Sounds from './Sounds.jsx';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { alpha } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Astrology from './astrology/Astrology.jsx'
import TarotCarousel from './TarotCarousel.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      quoteText: '',
      quoteAuthor: '',
      login: false,
      view: 'feed',
      entries: [],
      memory: null,
      quote: [],
      imageURL: null,
      username: '',
      friends: [],
      modal: false,
      allEntries: []
    };
    this.getFriends = this.getFriends.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.logout = this.logout.bind(this);
    this.getRandomMemory = this.getRandomMemory.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.getAllPublicJournals = this.getAllPublicJournals.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.addProfile = this.addProfile.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.changePosts = this.changePosts.bind(this);
    //for the modal component
    this.handleModal = this.handleModal.bind(this);
    //get all users journals, public or private
    this.getAllJournals = this.getAllJournals.bind(this);

  }
  //change views depending on what you click
  changeView(option) {
    this.setState({
      view: option,
    });
  }
  //Modal click handler
  handleModal() {
      this.setState({modal: !this.state.modal});
  }

  getAllPublicJournals() {
    axios.get('/api/journals/public')
      .then(({ data }) => {

        this.setState({
          entries: data
        });
      }).catch(err => console.log(err));
  }
  //Intended to get all users mood data for graph
  getAllJournals() {
    axios.get('/api/journals')
    .then(({data}) => {
      this.setState({ allEntries: data })
    })
    .catch(err => console.log(err));
  }

  addProfile(result) {
    axios.post('/api/profile', { imageURL: result.info.url })
      .then(data => console.log(data))
      .catch(err => console.warn(err));
  }
  // get random quote for home page
  //test
  getRandomQuote() {
    axios.get('/api/quotes')
      .then(({ data }) => {
        const randomIndex = Math.floor(Math.random() * data.length + 1);
        this.setState({
          quoteText: data[ randomIndex ].text,
          quoteAuthor: data[ randomIndex ].author
        });
        const { quoteAuthor } = this.state;
        if (quoteAuthor === null) {
          this.setState({ quoteAuthor: 'Anonymous' });
        }
      }).catch((err) => console.error(err));
  }
  getQuote() {
    axios.get('/quote')
      .then(quote => {

        this.setState({ quote: quote.data });
      }
      ).catch(err => console.log('Error Getting Quote', err));
  }

  getProfile() {
    axios.get('/api/profile')
      .then((data) => {
        console.log('DATA PROFILE PIC', data);
        this.setState({
          imageURL: data[ 0 ].imageURL
        });
      }).catch(err => console.error(err));
  }
  // get random memory for memory page
  getRandomMemory() {
    axios.get('/api/journals')
      .then(({ data }) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        this.setState({
          memory: data[ randomIndex ],
          username: data[ 0 ].username
        });
      }).catch((err) => console.error(err));
  }
  changePosts(e) {
    this.setState({
      comments: e.target.value
    });
  }
  getFriends() {
    axios.get('/friends')
      .then(data => this.setState({
        friends: data
      }))
      .catch(err => console.log('error getting friends', err));
  }
  // render view based on nav
  renderView() {
    const { view, entries, quoteText, quoteAuthor, memory, quote, comments, imageURL, username } = this.state;
    if (view === 'feed') {
      return <Feed entries={ entries }

        quoteText={ quoteText }
        quoteAuthor={ quoteAuthor }
        imageURL={ imageURL }
        username={ username }
        changePosts={ this.changePosts }
        quoteAuthor={ quoteAuthor }/>;
    } else if (view === 'entry') {
      return <Entry logout={ this.logout }/>;
    } else if (view === 'resource') {
      return <Resources />;
    } else if (view === 'friends') {
      return <Friends entries={ entries } username={ username }/>;
    } else if (view === 'chat') {
      return <ChatRoom />;
    }else if(view === 'astrology') {
      return <Astrology />
    } else if (view === 'tarot') {
      return <TarotCarousel />
    } else if (view === 'board') {
      return <Board />;
    } else if(view === 'sounds') {
      return <Sounds />;
    } else if (view === 'memory') {
      return (<div>
        {memory ?
          <Memory logout={ this.logout } memory={ memory } changeMemory={ this.getRandomMemory } quote={ quote }/> : <div className='text'
            style={ { display: 'flex', flexDirection: 'column', align: 'center', justify: 'center', alignItems: 'center' } }>
            <img src="https://content.invisioncic.com/r143258/monthly_2016_01/b5b2b1603073cc426b410d1ba620685d.jpg.28d5f653fbeaef692ba8a5f70aaf1f44.jpg"/>
            <h1><i>Ruh roh!</i></h1>
            <h3>It looks like you don't have any memories yet.
                      Write an entry to view a random memory.</h3>

          </div>
        }
      </div>);
    }
  }
  componentDidMount() {
    this.handleModal;
    this.getAllJournals();
    this.getFriends();
    this.getRandomQuote();
    this.getQuote();
    this.getRandomMemory();
    this.renderView();
    this.getAllPublicJournals();
    axios.get('/isloggedin')
      .then(({ data }) =>
        this.setState({
          login: data
        }))
      .catch((err) => console.warn(err));
  }



  logout(bool) {
    this.setState({
      login: bool
    });
  }
  render() {
    const { login, view, roomName, imageURL, username, modal, entries, allEntries } = this.state;
    const { handleModal, getAllJournals } = this;
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600,
      bgcolor: '#D19FE8',
      border: '2px solid #8A2BE2',
      boxShadow: 24,
      borderRadius: 3,
      p: 4,
    };
    return (
      <div>
        {
          !login
            ? <div>
              <img className='background' src='https://i.ibb.co/WWs7MZd/headstrong-girl-blue.jpg'/>
              <div className='loginMain'>
                <div className="text">
                  <h1>Welcome To HeadStrong!</h1>
                  <h3>A stress-free, judgment free zone for you to get your thoughts out</h3>

                </div>
              </div>

              <a className='loginButton' href="/auth/google"> <GoogleButton /></a>
              <div className='footer'>
                <div className='logo2'>
                        HeadStrong
                </div>
                <div className='footer-text'>
                        Since 2021
                </div>
              </div>
            </div>
            :
            <div>

              <AppBar>
                <div className='logo'>
                        HeadStrong 2.0

                </div>
                <div className='nav'>
                  <Widget
                    sources={['local', 'camera', 'dropbox']} // set the sources available for uploading -> by default
                    // all sources are available. More information on their use can be found at
                    // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
                    resourceType={ 'image' } // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
                    cloudName={ 'geonovember' } // your cloudinary account cloud name.
                    // Located on https://cloudinary.com/console/
                    uploadPreset={'smiuh98k'} // check that an upload preset exists and check mode is signed or unisgned
                    buttonText={'Choose Avatar'} // default 'Upload Files'
                    style={{
                      color: 'black',
                      border: 'none',
                      width: '80px',
                      backgroundColor: 'LightSkyBlue',
                      borderRadius: '16px',
                      height: '35px'
                    }} // inline styling only or style id='cloudinary_upload_button'
                    folder={'demo'} // set cloudinary folder name to send file
                    cropping={false} // set ability to crop images -> default = true
                    onSuccess={result => this.setState({imageURL: result.info.url})} // add success callback -> returns result
                    onFailure={console.log('failure!!!')} // add failure callback -> returns 'response.error' + 'response.result'
                    logging={false} // logs will be provided for success and failure messages,
                    // set to false for production -> default = true
                    customPublicId={ 'sample' } // set a specific custom public_id.
                    // To use the file name as the public_id use 'use_filename={true}' parameter
                    eager={ 'w_400,h_300,c_pad|w_260,h_200,c_crop' } // add eager transformations -> deafult = null
                    use_filename={ false } // tell Cloudinary to use the original name of the uploaded
                    // file as its public ID -> default = true,
                  />
                  <span>{username}</span>
                  <img alt="profile-pic" id='profilePic' src={imageURL || avatar} />

                  <div className={
                    (view === 'feed') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('feed') }>Home</Button>
                  </div>
                  <div className={
                    (view === 'entry') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('entry') }>Write Entry</Button>
                  </div>
                  <div className={
                    (view === 'memory') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('memory') }>Memory</Button>
                  </div>
                  <div className={
                    (view === 'astrology') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('astrology') }>Daily Horoscope</Button>
                  </div>
                  <div className={
                    (view === 'tarot') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('tarot') }>Tarot Cards</Button>
                  </div>
                  <div className={
                    (view === 'chat') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('friends') }>Friends</Button>
                  </div>
                  <div className={
                    (view === 'board') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('board') }>Draw</Button>
                  </div>
                  <div className={
                    (view === 'sounds') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('sounds') }>Sounds</Button>
                  </div>

                  <div className={
                    (view === 'resource') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => this.changeView('resource') }>Resources</Button>
                  </div>

                  <div className='button'>
                    <Button onClick={handleModal}>How're you?</Button>
                    {modal && (
                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={modal}
                      onBackdropClick={handleModal}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <GraphWindow data={entries} onLoad={allEntries}/>
                        </Box>
                      </Fade>
                    </Modal>
                    )}
                  </div>

                  <div className={
                    (view === 'logout') ? 'currentButton' : 'button' }>
                    <Button
                      className='Button'
                      onClick={ () => axios.delete('/logout')
                        .then(({ data }) => this.logout(data))
                        .catch((err) => console.warn(err)) }
                    >Logout</Button>
                  </div>



                  <WidgetLoader />


                </div>

              </AppBar>

              <div>
                <img className='background' src='https://i.ibb.co/WWs7MZd/headstrong-girl-blue.jpg'/>
                <div className='footer'>
                  <div className='logo2'>
                            HeadStrong 2.0
                  </div>
                  <div className='footer-text'>
                            Since 2021
                  </div>
                </div>
                <div className='main'>
                  {this.renderView()}
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}
export default App;
