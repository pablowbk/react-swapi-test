import React, { Component } from 'react';

class AppB extends Component {
  constructor() {
    super()
    this.state = {
      api_data: ''
    }
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
    fetch('https://swapi.co/api/people/')
      .then(results => results.json())
      .then(data => this.setState({api_data: data.results}))
  }

  componentDidMount() {
    console.log('componentDidMount');

  }

  render() {
    console.log('render', this.state);
    return (
      <div>
        <h2>STARWARS</h2>
      </div>
    )
  }
}

export default AppB;
