import React from 'react';
import Entry from './Entry';
import { connect } from 'react-redux';

const Entries = (props) =>{
    return(
      <div>
      <h1>Entries</h1>
       {
         props.entries.map( 
           (entry) => <Entry entry={entry} />)
         }
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    entries: state.entries
  }
}
export default connect(mapStateToProps)(Entries);