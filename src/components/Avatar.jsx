import React, { Component } from 'react';
import '../styles/common.css';

class Avatar extends Component {
    state = {  }
    render() { 
        return (
            <img 
                src={ require( '../resources/' + this.props.data.avatar ).default } 
                alt={ this.props.data.alt }
                className="avatar" 
            />
         );
    }
}

export default Avatar;