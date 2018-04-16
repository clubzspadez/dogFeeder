import React from 'react';
import Entry from './Entry';

const Entries = (props) =>{
    return(
      <div>
       {props.map( (entry) => <Entry entry={entry} />)}
      </div>
    );
  }


export default Entries;