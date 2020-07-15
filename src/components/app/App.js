import React from 'react';
import './App.css';
import Header from '../headerComponent/header';
import LandingPage from '../LandingPage/landingPage';
import Footer from '../Footer/footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <Footer/>
      </div>
    );
  }
}

export default App;
