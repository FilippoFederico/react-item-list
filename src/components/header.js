import React from 'react';
// import { genericTypeAnnotation } from '@babel/types';

const HeaderDiv = {
  width: '50%',
  height: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',

}

const Header = props => { 
  return (
    <div style={ HeaderDiv }>
        <h2>Header</h2>    
    </div>
  );
}

// method from net ninja #6th video

// render:function(){
//   var todos = this.state.todos;
//   todos = todos.map(function(item, index){
//     return(
//       <p>{item}</p>
//     )
//   })
// }

export default Header;
