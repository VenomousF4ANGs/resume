import React, { Component } from 'react';
import '../styles/common.css';
import _ from 'lodash';

class Card extends Component {
    render() { 
        let content = this.props.data;
        return ( 
            <div className="card">
                <div className="card-header">
                    {content.icon?<img 
                        className="card-header-icon" 
                        src={ require("../resources/icon/" + content.icon ).default } 
                        alt="icon" 
                    />:""}
                    {content.header?<div className="card-header-text" >{content.header}</div>:""}
                    {content.right_content?<div className="card-header-right" >{content.right_content}</div>:""}
                </div>
                {
                    _.map(
                        content.data,
                        (d)=>{
                            return (
                                <div className={"card-content " + content.style||""} key={d.id}>
                                    {d.text}
                                </div>
                            );
                        }
                    )
                }
                
            </div>
         );
    }
}
 
export default Card;