import React from 'react';
import Header from './Header';
import Entries from './Entries';

class App extends React.Component {
   state = {
     entries : []
   }
  render(){
    return(
      <div>
       <Header />
       <Entries />
       <p>This is rendering</p>
      </div>
    );
  }
}


/*
!DOG FEEDER 

?- Need to be able to enter a time entry 
  *take input and store in object
  *store time entries in an array
  *add completed property
const entries = [{ entry: entryText, createdAt: moment(), completed: false }, {}];

function addEnntry(entryText){
  const now = moment();
  entries.push({
    entry: entryText,
    createdAt: now,
    completed: false
  });
  displayEntry();
}

?- Need to be able to display entries 
function displayEntry(){

}
?- Need to be able to modify an entry
function modifyEntry(){

}
?- Need to be able to delete an entry
function deleteEntry(){

}
*/

// const feederData = {
//   entries: [],
//   addEntry( { entry = 'Enter an entry' } ){
//     // const now = moment();
//     this.entries.push({
//       entry,
//       completed: false
//     });

//     this.displayEntry();
//   },

//   displayEntry(){
//     console.log(this.entries);
//   },

//   modifyEntry(modifiedEntry, index){
//     this.entries[index].entry = modifiedEntry;
//     this.displayEntry();
//   },

//   deleteEntry(){

//   }
// };

// feederData.addEntry({ entry: 'Feed dogs'})
// feederData.displayEntry();

export default App;