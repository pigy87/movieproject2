import React from 'react';
import './App.css';
import Header from '../headerComponent/header';
import SearchBox from '../searchBox/searchBox';
import databaseApi from '../../util/databaseapi';
import Results from '../resultsComponent/results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({     
      searchResults:null
    })

    this.takeTerm = this.takeTerm.bind(this);
    this.searchForMovies=this.searchForMovies.bind(this);
    this.print=this.print.bind(this);
  }

  takeTerm(term) {
    databaseApi.queryWord(term);
  }

  searchForMovies(term){
    this.takeTerm(term);
    databaseApi.getListsMovies()
    .then(data=>{
      this.setState({
        searchResults:data
      })
    })
  }

  print(){
    console.log(this.state.searchResults)
  }

  render() {
   //this.print()
    return (
      <div className="App">
        <Header />
        <SearchBox searchForMovies={this.searchForMovies} />
        <Results results={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
