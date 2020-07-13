import React from 'react';
import './listResults.css';

class ListResults extends React.Component {
    constructor(props){
        super(props)
        this.takeDataMovie=this.takeDataMovie.bind(this);
    }

    takeDataMovie(e){
       this.props.handleClick(e.target.id)
    }

    render() {
        return (
            <div className={'picturesAndLis'}>
                
                <img className={'litlePictures'}
                    src={this.props.eachMovie.backdrop_path ? `https://image.tmdb.org/t/p/w500${this.props.eachMovie.backdrop_path}`  : "https://image.tmdb.org/t/p/w500"+this.props.eachMovie.poster_path} alt=" " />
                <li key={this.props.eachMovie.id}
                    className={'lis'}
                    id={this.props.eachMovie.id}
                    onClick={this.takeDataMovie}>{this.props.eachMovie.title ? this.props.eachMovie.title : this.props.eachMovie.name}</li>
            </div>
        );
    }
}

export default ListResults;