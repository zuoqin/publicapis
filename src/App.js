import React , { Component } from 'react';

import 'react-bootstrap-table';
import './App.css';
import APITable from'./APITable'

class App extends Component {
  constructor(){
    super();
    this.state={ items: [], alive: true}
  }

  componentDidMount(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.publicapis.org/health-check'

    fetch(proxyUrl + targetUrl)
    .then(results => {
      return results.json();
    }).then( data => {
      this.setState({
        ...this.state,
        alive: data.alive
      })
      if(data.alive === true){
        fetch('https://api.publicapis.org/entries')
        .then(results => {
          return results.json();
        }).then( data => {

          this.setState({
            ...this.state,
            items: data.entries
          })
        })

      }
    })
  }
  render() {
    if(this.state.alive){
      return (
        <APITable
          items= {this.state.items}
        />
      )
    }
    else{
      return (
        <h1>
          Api is not available
        </h1>
      )
    }
  }
}

export default App;
