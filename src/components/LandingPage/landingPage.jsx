import React  from 'react';
import '../LandingPage/landingPage.css';
import SearchBox from '../searchBox/searchBox';
import databaseApi from '../../util/databaseapi';
import Results from '../resultsComponent/results';

class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            searchChoose:false,
            searchResults: null
        })
        this.handleClickForChoose=this.handleClickForChoose.bind(this);
        this.handleClickFor20Movies=this.handleClickFor20Movies.bind(this);
        this.searchForMovies = this.searchForMovies.bind(this);
    }

    handleClickForChoose(){
        this.setState({
            searchChoose:true
        })
    }
    handleClickFor20Movies(){
        this.setState({
            searchChoose:false
        })
    }
    searchForMovies(term) {
        databaseApi.getListsMovies(term)
          .then(data => {
            this.setState({
              searchResults: data
            })
          })
      }
    
    render() {
        return (
            <div>
                <ul id={'landingUl'}>
                    <li className={'landingLis'} onClick={this.handleClickForChoose}>Search Movies!</li>
                    <li className={'landingLis'} onClick={this.handleClickFor20Movies}>Top 20 Movies!</li>
                </ul>
                <div id={'searchSection'}>
                    {this.state.searchChoose?<SearchBox searchForMovies={this.searchForMovies}/>:console.log('ubacit response 20 movies')}
                    {this.state.searchChoose?<Results results={this.state.searchResults}/>:console.log('ubacit response 20 movies2')}
                </div>
            </div>
        );
    }
}

export default LandingPage;