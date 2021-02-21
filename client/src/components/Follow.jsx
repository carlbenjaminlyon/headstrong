import React from 'react';
import axios from 'axios';

class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false
    };
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
  }
  handleFollow(data) {
    axios.post('/friends', data)
      .then(data => this.setState({following: true}))
      .catch(err => console.log('error adding friend'));
  }
  handleUnFollow() {
    axios.put('/friends')
      .then(data => this.setState({following: false}))
      .catch(err => console.log('error unfriending', err));

  }
  render() {
    const { following } = this.state;
    const status = 'follow';
    if (following) {
      status = 'unfollow';
    }
    return (
      <div>
        <button type='submit' onClick={ status === 'follow' ? this.handleFollow : this.handleUnFollow }>{status}</button>
      </div>
    );

  }

}

export default Follow;

