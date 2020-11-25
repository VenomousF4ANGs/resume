import React, { Component } from 'react';
import '../styles/common.css';

class NamePlate extends Component {
    render() { 
        return (
            <div className="name-plate">
                <h3 className="full-name" >{this.props.data.name}</h3>
                <hr/>
                <p>{this.props.data.summary}</p>
            </div> 
         );
    }
}
 
export default NamePlate;