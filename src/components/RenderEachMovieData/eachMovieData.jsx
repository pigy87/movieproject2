import React from 'react';
import './eachMoviedata.css';


class EachMovieData extends React.Component {
    
    render() {
      console.log(this.props.data)
     // let example="https://image.tmdb.org/t/p/w500/oRyVYIqegDB5rWjfloeu1Zgk332.jpg";
      let backGround={
          backgroundImage: "url(" + "https://image.tmdb.org/t/p/w500"+this.props.data.poster_path+")"
          
          
      }

     
        return (
            <div id={'moviedata'}>                
                <h2 id={'moviedataTitle'}> Movie Data!</h2>
                <div id={'moviedataLis'}>
                    <ul id={'movieDataUl'}>
                        <li key={this.props.data.id + '1'}><span className={'prefix'}>Title:</span>{this.props.data.title}</li>
                        <li key={this.props.data.id + '2'}><span className={'prefix'}>Relesed:</span>{this.props.data.release_date}</li>
                        <li key={this.props.data.id + '3'}><span className={'prefix'}>Rate:</span>{this.props.data.vote_average}</li>
                        <li key={this.props.data.id + '4'}><span className={'prefix'}>Language:</span>{this.props.data.original_language}</li>
                    </ul>
                        <div id={'overViewDiv'}>
                            <h4 id={'overViewtitle'}>Overview:</h4>
                            <p id={'overViewP'}>{this.props.data.overview}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default EachMovieData;