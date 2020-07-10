import React, { Component } from 'react';
import ListResults from '../list/listResults';
import './results.css';

class Results extends Component {
    render() {
        console.log(this.props.results)
        return (
            <div className={'resultsAndEachMovie'}>
                <div className={'resultsList'}>
                    <h2 id={'searchResultsTitle'}>Search Results!</h2>
                    <ul>
                        {!this.props.results?<p></p>:this.props.results.map(eachMovie=> <ListResults eachMovie={eachMovie}/>)}
                    </ul>                    
                </div>
                
                <div className={'eachMovie'}>

                </div>
            </div>
        );
    }
}

export default Results;