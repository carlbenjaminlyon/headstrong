import React from 'react';
import axios from 'axios'

const Feed = ({ quoteText, quoteAuthor }) => {

  return (
      <div className='text wrap'>
          <div>
              <h1>{quoteText}</h1>
<<<<<<< HEAD
              <h2><i>- {quoteAuthor}</i></h2>
=======
              <h2 style={ { marginRight: 5 } }><i>- {quoteAuthor}</i></h2>
              <br></br>
              <button type='submit' onClick={ () =>{
                    const data = { author: quoteAuthor, body: quoteText }
                    axios.post('/quotes', data)
                    .then(response => console.log('Quote Added', response))
                    .catch(err => console.log('Axios Quote Error', err))
              }
               }>Like</button>
>>>>>>> 999caad9791a5305df96ff1149763b0bb4907802
          </div>
      </div>
  );
};

export default Feed;
