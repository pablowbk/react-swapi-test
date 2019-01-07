import React, {Component} from 'react';
import CardContainer from './CardContainer';
import NavBar from './NavBar';
import Header from './Header';
import Loader from './Loader';
import About from './About';
import './App.css';

// const api_data = [];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      api_data: [],
      isVisible: false
    };

    this.handleAboutClick = this.handleAboutClick.bind(this);
  }

  componentDidMount() {
    // OLD WAY - only gets back the first page results
    // const url = 'https://swapi.co/api/people/';
    //
    // fetch(url)
    //   .then(response => response.json())
    //   .then(people => this.setState( { data: people.results } ))

    // New, but messy, way...
    const urlsArray = [];

    for(let i = 1; i < 10; i++) {
      urlsArray.push('https://swapi.co/api/people/?page=' + i.toString());
    }

    const charsData = [];

    const charsFetch = urlsArray.map(url => fetch(url)
        .then(res => res.json())
        .then(data => data.results.map(user => charsData.push(user)))
    );

    Promise.all(charsFetch)
      .then(results => this.setState({api_data: charsData}))
      .catch((err) => console.log('ERROR, please check', err))

  }

  handleAboutClick(event) {
    this.setState({isVisible: !this.state.isVisible});

  }


  render() {
    const { api_data, isVisible } = this.state;
    return (
      <div className='App'>
          <NavBar
            handleClick={this.handleAboutClick}
          />
          <Header />
          {
            api_data.length === 0
            ? <Loader /> //<h3>Loading Cards...</h3>
            : <h3>Cards Count: { api_data.length }</h3>
          }
          <CardContainer
            data={ api_data }
          />
          <About
            visibility={isVisible}
            handleClick={this.handleAboutClick}
          />
      </div>
    );
  }
}

export default App;
