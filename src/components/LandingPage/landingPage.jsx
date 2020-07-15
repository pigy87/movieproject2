import React from 'react';
import '../LandingPage/landingPage.css';
import SearchBox from '../searchBox/searchBox';
import databaseApi from '../../util/databaseapi';
import Results from '../resultsComponent/results';
import TopTwentyRenderList from '../topTwentyRenderList/topTwentyRenderList';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            searchChoose: true,
            searchResults: null,
            twentyMovies: null,
            inputBoxValue:null

        })
        this.handleClickForChoose = this.handleClickForChoose.bind(this);
        this.handleClickFor20Movies = this.handleClickFor20Movies.bind(this);
        this.searchForMovies = this.searchForMovies.bind(this);
    }

    componentWillMount() {
        this.searchFor20movies();
    }

    handleClickForChoose() {
        this.setState({
            searchChoose: true
        })

    }
    handleClickFor20Movies() {
        this.setState({
            searchChoose: false
        })

        this.searchFor20movies();

    }

    checkInputValue(value){
        if(value){
            this.setState({
                inputBoxValue:value
            })
        }else{
            this.setState({
                inputBoxValue:null
            })
        }

    }

    searchForMovies(term) {
        this.checkInputValue(term)
        databaseApi.getListsMovies(term)
            .then(data => {
                this.setState({
                    searchResults: data
                })
            })
    }

    searchFor20movies() {
        databaseApi.getTop20Movies()
            .then(data => {
                this.setState({ twentyMovies: data })
            })
    }

componentDidMount(){
    this.searchFor20movies();
}

    render() {
        //console.log(this.state.searchChoose)
       // console.log(this.state.twentyMovies)
       
        const proba1=!this.state.twentyMovies ? <p>Loading</p> : <TopTwentyRenderList results={this.state.twentyMovies} />;
        const proba2=!this.state.inputBoxValue ? proba1  :<Results results={this.state.searchResults} />
        return (
            <div>
                <ul id={'landingUl'}>
                    <li className={'landingLis'} onClick={this.handleClickForChoose}>Search Movies!</li>
                    <li className={'landingLis'} onClick={this.handleClickFor20Movies}>Top 20 Movies!</li>
                </ul>


                <div id={'searchSection'}>
                    <SearchBox searchForMovies={this.searchForMovies}/>
                    
                    {!this.state.searchResults?proba1:proba2}

                </div>


                

            </div>
        );
    }
}

export default LandingPage;