import React, { Component } from 'react';
import './searchBox.css';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: ''
        })

        this.handleButton = this.handleButton.bind(this);
        this.handleOnChange=this.handleOnChange.bind(this);
        
    }

    handleOnChange(e){
        //this.props.searchForMovies(e.target.value); 
       
        this.setState({
            value:e.target.value
        })
        
    }

    handleButton() {
      this.props.searchForMovies(this.state.value);        
    }

    


    render() {
        
        return (
            <div className={'boxDiv'}>
                <input id={'input'} type="text" value={this.state.value} onChange={this.handleOnChange}   placeholder={'Search Movies'}/>
                <button id={'button'} type="button" onClick={this.handleButton}>Search</button>
            </div>
        );
    }
}

export default SearchBox;


