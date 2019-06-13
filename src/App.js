import React, { Component } from 'react';
import ItemList from './components/item-list';
import Header from './components/header';
// import './App.css';

const DivApp = {
  border: '1px solid red',
  width: '500px',
  height: '100%',
  padding: '10px',
  margin: '20px'
}
const InputBtn = {
  width: '50%',
  height: '100%',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  marginTop: '10px'
}

class App extends Component {
  constructor(props){
      super(props);
  this.state = {
    names: ['Lemon', 'Peach', 'Banana', 'Mango', 'Orange'],
    name: '',
    test: 'test'
  }
  // this.handleChange = this.handleChange.bind(this);
}

handleChange = (e) => {

  console.log(e)
  this.setState({
    // TAKE THE NEW VALUE FROM INPUT
    name: e.target.value
  })

}

handleClick = () => {

  // DECLAIRE VARIABLES RELATED TO OUR INITIAL DATA
let name = this.state.name
let names = this.state.names
// PUSH INPUT VALUE IN A ARRAY
names.push(name)
// ADJUST AND USE THE NEW ARRAY
this.setState({
  names: names
})

}

  render() {
    console.log(this.state)
  return (
    
      <div style = {DivApp}>
        <Header />
        <ItemList items={this.state.names}></ItemList>
        {/* <ItemList items={this.state.test}></ItemList> */}

          <div style = { InputBtn }>

            <label>Add:</label>
            <input type="text" placeholder="Type here" value={this.state.name} onChange={this.handleChange} />
            <button onClick={this.handleClick}>Aggiungi</button>
          </div>
      </div>
      
    
  );
}
}

export default App;

// ReactDOM.render(<App />, document.getElementById('root'))
