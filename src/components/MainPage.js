import React from 'react'

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
        character: data
        });
      })
  }
render(){
  return(
    <div className="container2">
      <div className="container1">
        {this.state.character.type}
      </div>
    </div>
  )
}

}

export default MainPage