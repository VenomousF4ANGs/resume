import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import _ from 'lodash';
class NavBar extends Component {
    state = {
        selected: 0
    }

    componentDidMount(){
        console.log(window.location.pathname)
        _.forEach(
            this.props.data,
            (nav)=>{
                if(nav.url === window.location.pathname){
                    this.setState({
                        selected: nav.selected
                    })
                }
                return
            }
        )
    }


    select = (index)=>{
        this.setState({
            selected:index
        });
    }

    render() { 
        return ( 
            <nav role="navigation" className="nav-container">
                {
                    _.compact(_.map( 
                        _.values(this.props.data) , 
                        (nav,index)=>{
                            if(nav.display_txt){
                                return  (<Link className={index===this.state.selected?"nav-item nav-item-selected":"nav-item"} to={nav.url} key={nav.url} onClick={(e)=>{ this.select(index) }}>
                                            {nav.display_txt}
                                        </Link>);
                            }
                            else{
                                return null
                            }
                        } 
                    ))
                }
            </nav> 
        );
    }
}
 
export default NavBar;