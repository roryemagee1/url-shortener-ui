import React, { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await apiCalls.getUrls();
    const data = await response;
    this.setState({ urls: data.urls });
  }

  postData = (title, urlToShorten) => {
    apiCalls.postUrls(title, urlToShorten);
    this.getData();
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postData={this.postData}/>
        </header>
        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
