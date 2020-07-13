import React from 'react';
import './App.css';
import Header from '../headerComponent/header';
import SearchBox from '../searchBox/searchBox';
import databaseApi from '../../util/databaseapi';
import Results from '../resultsComponent/results';
import LandingPage from '../LandingPage/landingPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchResults: null
    })

   
    this.searchForMovies = this.searchForMovies.bind(this);
    this.print = this.print.bind(this);
  }
 
  searchForMovies(term) {
    databaseApi.getListsMovies(term)
      .then(data => {
        this.setState({
          searchResults: data
        })
      })
  }

  print() {
    console.log(this.state.searchResults)
  }

  render() {
    //this.print()

    return (
      <div className="App">
        <Header />
        <LandingPage/>
        <SearchBox searchForMovies={this.searchForMovies} />
        <Results results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
