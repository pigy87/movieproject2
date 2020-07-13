import React from 'react';
import './App.css';
import Header from '../headerComponent/header';
import LandingPage from '../LandingPage/landingPage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default App;
