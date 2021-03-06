import React from 'react';

import './eachMoviedata.css';


class EachMovieData extends React.Component {
    constructor(props){
        super(props);
        this.handleClickToBack=this.handleClickToBack.bind(this);
    }

    handleClickToBack(){
        console.log('racku')
        this.props.backToList()
    }

    render() {
       // console.log(this.props.data)
        // let example="https://image.tmdb.org/t/p/w500/oRyVYIqegDB5rWjfloeu1Zgk332.jpg";
        let backGround = {
            backgroundImage: "url(" + "https://image.tmdb.org/t/p/w500" + this.props.data.poster_path + ")",
        }
        return (
            <div className={'moviedata'}
                style={backGround}>
                
                <h2 id={'moviedataTitle'}> Movie Data!</h2>
                

                <ul id={'movieDataUl'}>
                
                    <li className={'lis'} key={this.props.data.id + '1'}><span className={'prefix'}>Title:</span>{this.props.data.title}</li>
                    <li className={'lis'} key={this.props.data.id + '2'}><span className={'prefix'}>Relesed:</span>{this.props.data.release_date}</li>
                    <li className={'lis'} key={this.props.data.id + '3'}><span className={'prefix'}>Rate:</span>{this.props.data.vote_average}</li>
                   
                </ul>
                <div id={'overViewDiv'}>
                    <h4 id={'overViewtitle'}>Overview:</h4>
                    <p id={'overViewP'}>{this.props.data.overview}</p>
                </div>
                <p className={'back-to-list'} onClick={this.handleClickToBack}>Back to Movie list!</p>

                <div className={'color-overlay'}></div>
                
            </div>
        )
    }
}

export default EachMovieData;