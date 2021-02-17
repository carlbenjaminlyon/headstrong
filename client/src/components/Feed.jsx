import React from 'react';
import axios from 'axios';
import moment from 'moment'

const Feed = ({ quoteText, quoteAuthor, entries }) => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a')
  return (
      <div className='text wrap'>
          <div>
              <h1>{quoteText}</h1>
              <h2 style={ { marginRight: 5 } }><i>- {quoteAuthor}</i></h2>
              <br></br>
              <button className='btn btn-primary btn-block ' type='submit' onClick={ () =>{
          const data = { author: quoteAuthor, body: quoteText };
          axios.post('/quotes', data)
            .then(response => console.log('Quote Added', response))
            .catch(err => console.log('Axios Quote Error', err));
        }
        }>Like</button>
          </div>
          <div>
              {entries.map(entry =>
                  <div key={ entry.id } id='comment'>
                      <div>{`User:${entry.username}`}</div>
                      <div>{`Title:${entry.title}`}</div>
                      <div>{`Message: ${entry.blog}`}<button className='btn btn-block'>Follow</button></div>
                      <div>{`Created at: ${time}`}</div>
                      <br></br>
                  </div>)}
          </div>
      </div>
  );
};

export default Feed;
