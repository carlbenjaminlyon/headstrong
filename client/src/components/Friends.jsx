import React from 'react';

const Friends = ({entries, username}) => {
  console.log('ggggg', entries);
const entrys = entries.filter((entry) => {
  if(entry.username !== username){
    return true
  }
  return false;
})
console.log('ENTRYS', entrys)
  return (
    <div>
      <h1 id='friendsPost'>Friend Activity</h1>
      <hr></hr>

      {entrys.map(entry =>
        <div key={ entry.id } id='comment' >
          <div>{`User:${entry.username}`}</div>
          <div>{`Title:${entry.title}`}</div>
          <div>{`Message: ${entry.blog}`}</div>
          {entry.journalImage ? <div ><img height='200px' width='300px' src={entry.journalImage}/></div> : null}
          <div>{`Posted: ${entry.createdAt}`}</div>
          <hr></hr>
        </div>)
    }



    </div>
  );
};

export default Friends
;
