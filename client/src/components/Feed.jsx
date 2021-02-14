import React from 'react';
import axios from 'axios';

const Feed = ({ quoteText, quoteAuthor, entries }) => {
  return (
    <div className='text wrap'>
      <div>
        <h1>{quoteText}</h1>
        <h2 style={ { marginRight: 5 } }><i>- {quoteAuthor}</i></h2>
        <br></br>
        <button type='submit' onClick={ () =>{
          const data = { author: quoteAuthor, body: quoteText };
          axios.post('/quotes', data)
            .then(response => console.log('Quote Added', response))
            .catch(err => console.log('Axios Quote Error', err));
        }
        }>Like</button>
      </div>
      <div>
        {entries.map(entry =>
          <div key={entry.id}>
            <div>{entry.title}</div>
            <div>{entry.blog}</div>
            <div>{entry.username}</div>
          </div>)}
      </div>
    </div>
  );
};

export default Feed;
