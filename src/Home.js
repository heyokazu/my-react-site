import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import Header from './Header'
import Footer from './Footer'


const contentful = require('contentful')

const client = contentful.createClient({
  space: 'jcajacc3gpxh',
  accessToken: '3392c90c4aba4366032be4e19e989c0b7cae19d9050dedf3b5208a988bd29b06'
})

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      text: ''
    }
  }

componentWillMount() {
  client.getEntry('4xxaIBxGQ0gWWkYWieK00k')
  .then((entry) => this.setState({
    title: entry.fields.title,
    text: entry.fields.text
  }))
  .catch(console.error)
}


  render() {
    return (
      <div className="Home">
        <Header />
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">{this.state.title}</h1>
          <p className="Home-text">{this.state.text}</p>
          <button className="Home-button">Start the cource</button>
        </header>
        <div className="Home-grid">
          <div className="Home-card" />
          <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        </div>
        <div className="Home-gallery">
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
          <div className="Home-card" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
