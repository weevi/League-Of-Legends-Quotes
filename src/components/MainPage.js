import React from 'react'
import ChampionsData from '../data/champions.json'
import MainPageStyle from '../MainPageStyle.css'
import "typeface-unica-one";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.value);
    event.preventDefault();
  }

render(){
const keys = Object.keys(ChampionsData)
const randomKey = Math.floor(Math.random() * keys.length)
const champObject = ChampionsData[randomKey]
const obj = Object.entries(champObject).map(([key, value]) => ({key, value}));
const champData = [];
Object.keys(champObject).forEach(key => champData.push({name: key, value: champObject[key]}))

  return(
<div>
  <div className="wrap">
  <h1>What is this champions name?</h1>
   <div>
        <img alt = "champion"src={champData[6].value}/>
  </div>
  <form onSubmit={this.handleSubmit}>
  <label>
    <input value={this.state.value} onChange={this.handleChange} type="text" name="name" placeholder="ENTER HERE"/>
  </label>
  <input className = "submit" type="submit" value="Submit" />
</form>
</div>
</div>
  )
 }
 updateInputValue(evt) {
  this.setState({
    inputValue: evt.target.value

  });
}
}

export default MainPage