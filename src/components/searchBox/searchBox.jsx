import React, { Component } from 'react';
import './searchBox.css';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: ''
        })
        
        this.handleOnChange=this.handleOnChange.bind(this);
        
    }

    handleOnChange(e){  
        this.props.searchForMovies(e.target.value); 
        this.setState({
            value:e.target.value
        })                
    }

    render() {        
        return (
            <div className={'boxDiv'}>
                <input id={'input'} type="text" value={this.state.value} onChange={this.handleOnChange}   placeholder={'Search Movies'}/>            
            </div>
        );
    }
}

export default SearchBox;


