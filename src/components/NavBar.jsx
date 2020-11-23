import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <nav role="navigation">
                <Link to="/profile">Profile</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/work">Work Experience</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="/downloads">Downloads</Link>
            </nav> 
        );
    }
}
 
export default Header;