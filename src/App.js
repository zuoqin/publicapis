import React , { Component } from 'react';

import 'react-bootstrap-table';
import './App.css';
import APITable from'./APITable'

require('es6-promise').polyfill();
require('isomorphic-fetch');


class App extends Component {
  constructor(){
    super();
    this.state={ items: [], alive: true}
  }


  fetchData(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.publicapis.org/health-check'

    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then( data => {
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
    .catch(error => {
      this.setState({
        ...this.state,
        alive: false
    })
    })
  }


  componentDidMount(){
    setTimeout(function() { this.fetchData(); }.bind(this), 10);
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
