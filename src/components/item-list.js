import React from 'react';
// import { genericTypeAnnotation } from '@babel/types';
const styleP = {
    width: '80%',
    height: '20%',
    backgroundColor: 'green',
    padding: '5px',
    border: '1px solid red',
    color: 'white'
}
const ItemList = props => { 
  return (
    <div>
        { props.items.map(item => <p style = {styleP}>{item}</p>) }       
    </div>
  );
}


export default ItemList;
