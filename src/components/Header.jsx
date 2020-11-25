import React, { Component } from 'react';
import '../styles/common.css';
import Avatar from './Avatar';
import NamePlate from './NamePlate';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <Avatar         data={this.props.data} />
                <NamePlate      data={this.props.data} />
            </div> 
        );
    }
}
 
export default Header;