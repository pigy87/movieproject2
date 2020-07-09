import React from 'react';
import './App.css';
import Header from '../headerComponent/header';
import SearchBox from '../searchBox/searchBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      searchTerm: ''
    })
    this.takeTerm = this.takeTerm.bind(this);
  }

  takeTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  render() {

    return (
      <div className="App">
        <Header />
        <SearchBox takeTerm={this.takeTerm} />
      </div>
    );
  }
}

export default App;
