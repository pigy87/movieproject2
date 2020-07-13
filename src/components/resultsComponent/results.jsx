import React, { Component } from 'react';
import ListResults from '../list/listResults';
import './results.css';
import EachMovieData from '../eachMovieData/eachMovieData';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedMovie: null
        })
        this.handleLiClick = this.handleLiClick.bind(this);
    }



    handleLiClick(movieDataId) {

        let movieData = this.props.results.find(element => {
            if (element.id == movieDataId) {
                return element
            }
            return console.log('handlovan click')
        });
        this.setState({
            selectedMovie: movieData
        })
        
    }

    render() {

        console.log(this.props.results);
        //console.log(this.state.selectedMovie)

        return (
            <div className={'resultsAndEachMovie'}>
                <div className={'resultsList'}>
                <h2 id={'searchResultsTitle'}>Search Results!</h2>
                    <ul>

                        {!this.props.results ? '' : this.props.results.map(eachMovie => {
                            return <ListResults key={eachMovie.id}
                                                eachMovie={eachMovie}
                                                handleClick={this.handleLiClick} />
                        }
                        )}
                    </ul>
                </div>

                <div className={'eachMovie'}>                   
                    {!this.state.selectedMovie ? <p></p> : <EachMovieData data={this.state.selectedMovie} />}                    
                </div>
            </div>
        );
    }
}

export default Results;