import React, { Component } from 'react';
import '../styles/common.css';
import Avatar from './Avatar';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <Avatar/>
                <p>Abhisekh Nag</p>
                <p>Senior Software Engineer | Artist | Perfectionist</p>
            </div> 
        );
    }
}
 
export default Header;