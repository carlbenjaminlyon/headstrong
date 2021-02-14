import React from 'react';

const Feed = ({ quoteText, quoteAuthor, entries }) => {
  console.log('ENTRIES', entries);
  return (
    <div className='text wrap'>
      <div>
        <h1>{quoteText}</h1>
        <h2><i>- {quoteAuthor}</i></h2>
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

