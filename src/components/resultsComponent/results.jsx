import React, { Component } from 'react';
import ListResults from '../RenderListResults/listResults';
import './results.css';
import EachMovieData from '../RenderEachMovieData/eachMovieData';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            selectedMovie: null,
            resultsListVisible:'resultsList',
            resultsListInvisible:'results-list-invisible'

            
        })
        this.selectedMovieToState = this.selectedMovieToState.bind(this);
        this.deselectMovieFromState = this.deselectMovieFromState.bind(this);
    }
    selectedMovieToState(movieDataId) {

        let movieData = this.props.results.find(element => {
            if (element.id == movieDataId) {
                return element
            }

        });
        this.setState({
            selectedMovie: movieData
        })

    }
    deselectMovieFromState() {
        this.setState({
            selectedMovie: null
        })
    }

     toNone(){
         return {display:'none'}
     }

    render() {
        //   console.log(this.props.results);
        //console.log(this.state.selectedMovie)

        const visible ={display:'visible'};
        const nonVisible ='none';
     
        return (
            <div className={'resultsAndEachMovie'}>
                <h2 id={'searchResultsTitle'}>Search Results!</h2>
                 
                    <div className={this.state.selectedMovie?this.state.resultsListInvisible:this.state.resultsListVisible}>

                        {!this.props.results ? '' : this.props.results.map(eachMovie => {
                            return <ListResults key={eachMovie.id}
                                eachMovie={eachMovie}
                                selectMovieId={this.selectedMovieToState} />
                        }
                        )}

                    </div>
                
                <div className={'eachMovie'}>
                    {!this.state.selectedMovie ? <p></p> : <EachMovieData data={this.state.selectedMovie}
                        backToList={this.deselectMovieFromState} />}
                </div>
            </div>
        );
    }
}

export default Results;