import React, { Component } from 'react';
import ListResults from '../RenderListResults/listResults';
import EachMovieData from '../RenderEachMovieData/eachMovieData';

class TopTwentyRenderList extends Component {
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
                <h2 id={'searchResultsTitle'}>Top 20 Movies Ever!</h2>   
                <div className={'resultsList'}>                 
                        {!this.props.results ? '' : this.props.results.map(eachMovie => {
                            return <ListResults key={eachMovie.id}
                                                eachMovie={eachMovie}
                                                handleClick={this.handleLiClick} />
                        }
                        )}                    
                </div>

                <div className={'eachMovie'}>                   
                    {!this.state.selectedMovie ? <p></p> : <EachMovieData data={this.state.selectedMovie} />}                    
                </div>
            </div>
        );
    }
}

export default TopTwentyRenderList;