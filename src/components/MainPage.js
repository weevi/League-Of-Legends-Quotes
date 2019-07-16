import React from 'react'
import ChampionsData from '../data/champions.json'
import MainPageStyle from '../MainPageStyle.css'
import "typeface-unica-one";

class MainPage extends React.Component {

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
  <form>
  <label>
    <input type="text" name="name" placeholder="ENTER HERE"/>
  </label>
</form>
</div>
</div>
  )
 }
}

export default MainPage