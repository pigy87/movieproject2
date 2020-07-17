import React from 'react';
import '../LandingPage/landingPage.css';
import callApi from '../../util/databaseapi';
import Results from '../resultsComponent/results';
import TopTwentyRenderList from '../topTwentyRenderList/topTwentyRenderList';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            searchChoose: false,
            searchResults: null,
            twentyMovies: null,
            inputBoxValue: null,
            value: ''

        })
        this.handleClickForSearch = this.handleClickForSearch.bind(this);
        this.handleClickFor20Movies = this.handleClickFor20Movies.bind(this);
        this.searchForMovies = this.searchForMovies.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentWillMount() {
        this.searchFor20movies();
    }

    handleClickForSearch() {
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

    checkInputValue(value) {
        if (value) {
            this.setState({
                inputBoxValue: value
            })
        } else {
            this.setState({
                inputBoxValue: null
            })
        }

    }

    searchForMovies(term) {
        this.checkInputValue(term)
        callApi.getListsMovies(term)
            .then(data => {
                this.setState({
                    searchResults: data
                })
            })
    }

    searchFor20movies() {
        callApi.getTop20Movies()
            .then(data => {
                this.setState({ twentyMovies: data })
            })
    }

    handleOnChange(e) {
        this.setState({
            value: e.target.value
        })
        this.searchForMovies(e.target.value)
    }



    render() {
        //console.log(this.state.value)
        //console.log(this.state.searchResults)
        console.log(this.state.searchChoose)
        console.log(this.state.twentyMovies)

       /* const proba1 = !this.state.twentyMovies ? <p>Loading</p> : <TopTwentyRenderList results={this.state.twentyMovies} />;
        const proba2 = !this.state.inputBoxValue ? proba1 : <Results results={this.state.searchResults} />*/
        /*{!this.state.searchResults?proba1:proba2}*/
        /*<SearchBox searchForMovies={this.searchForMovies}/>*/
        let conditinal = () => {
            if (!this.state.searchResults) {

                return <TopTwentyRenderList results={this.state.twentyMovies} />

            } else if (this.state.searchChoose && this.state.searchResults) {
                console.log('dugme za pretrazivanje izabrano i prikazi rezultate');
                return <Results results={this.state.searchResults} />

            } else {
                console.log('prikazi 20 top filmova');
                return <TopTwentyRenderList results={this.state.twentyMovies} />

            }
        }
        return (
            <div>
                <ul id={'landingUl'}>
                    <li className={'landingLis'} onClick={this.handleClickForSearch}>Search Movies!</li>
                    <li className={'landingLis'} onClick={this.handleClickFor20Movies}>Top 20 Movies!</li>
                </ul>


                <div id={'searchSection'}>

                    <div className={'boxDiv'}>
                        <input id={'input'} type="text" value={this.state.value} onChange={this.handleOnChange} placeholder={'Search Movies'} />
                    </div>
                    {conditinal()}



                </div>




            </div>
        );
    }
}

export default LandingPage;