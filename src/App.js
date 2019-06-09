import React, { Component } from 'react';
import ItemList from './components/item-list';
// import './App.css';

class App extends Component {
  constructor(props){
      super(props);
  this.state = {
    names: ['Filippo', 'Tom', 'Jerry'],
    name: '',
  }
  // this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
  console.log('type input', this)
  this.setState({
    name: e.target.value
  })
}

handleClick(e){
console.log('click btn')
this.setState(setState => ({
  names: [...setState.names, setState.name]
}))
}

  render() {
  return (
    <div>
      <div>
        <ItemList items={this.state.names}></ItemList>
        <label>Aggiungi nome:</label>
        <input type="text" placeholder="Type here" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <button onClick={(e) => this.handleClick(e)}>Aggiungi</button>
      </div>
      {/* <header>
        { names.map(name => <p>Ciao {name}</p>) }       
      </header> */}
    </div>
  );
}
}

export default App;
