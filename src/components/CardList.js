import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      { 
        robots.map((user, i) => {
          return <Card  
            key={robots[i].id} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
          />
        })
      }
      <h1>Hello Gorgeous</h1>
    </div>
  );
}

export default CardList;