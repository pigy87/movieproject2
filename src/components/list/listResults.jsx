import React from 'react';
import './listResults.css';

class ListResults extends React.Component {
    render() {
        return (
            
                  <li  key={this.props.eachMovie.id}
                        className={'lis'}>{this.props.eachMovie.title?this.props.eachMovie.title:this.props.eachMovie.name}</li>                
            
        );
    }
}

export default ListResults;