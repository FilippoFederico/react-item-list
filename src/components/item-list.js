import React from 'react'

export default function ItemList(props) {
  const items = props.items

const clickDelete = (e) => {
  
   console.log('delete clicked', e)

 }

  return (
    <div>
      {items.map(item => 
      <p style = {styleP}>
        <span style = {styleDelete} onClick = {clickDelete}>Delete</span>
        {item}
      </p>)}
    </div>
  )
}




// import React from 'react';
// // import { genericTypeAnnotation } from '@babel/types';

const styleP = {
    width: '60%',
    height: '10%',
    backgroundColor: 'green',
    padding: '5px',
    color: 'white',
    borderRadius: '2px',
    margin: 'auto',
    marginTop:'3px',
    textAlign: 'justify'
}
const styleDelete = {
    marginRight: '60px',
    border: '1px solid white',
    padding: '0 3px 0 3px'
  
}
const MainDiv = {
    width: '80%',
    height: '100%',
    backgroundColor: 'blue',
    padding: '10px',
    margin: 'auto',
    
}

// // clickDelete(e){
  
// //    alert('delete clicked')

// //  }

// const ItemList = props => { 
//   return (
//     <div style = {MainDiv}>
//         { props.items.map(item => <p style = {styleP}><span style = {styleDelete}>Delete</span>{item}</p>) }    
//     </div>
//   );
// }

// // method from net ninja #6th video

// // render:function(){
// //   var todos = this.state.todos;
// //   todos = todos.map(function(item, index){
// //     return(
// //       <p>{item}</p>
// //     )
// //   })
// // }

// export default ItemList;
