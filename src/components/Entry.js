import React from 'react';

const Entry = ({ description, id, createdAt}) =>{
    return(
      <div>
       <h1> This is an entry </h1>
       <p>{description}</p>
      </div>
    );
  }


export default Entry;