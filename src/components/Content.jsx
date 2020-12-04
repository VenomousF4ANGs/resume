import React, { Component } from 'react';
import Card from './Card';
import '../styles/common.css';
import _ from 'lodash';

class Content extends Component {
    render() { 
        return ( 
            <div className="content-container">
                {
                    _.map(
                        _.sortBy(_.entries(this.props.data.body.category) , (e)=>{ return e[1].id }),
                        (entry)=>{
                            let category = entry[1]
                            return (
                                <React.Fragment key={entry[0]}>
                                    <div className="content-item content-item-header">{category.display_name}</div>
                                    <div className="content-item">
                                        {
                                            _.map(
                                                category.content,
                                                (content)=>{
                                                    return <Card key={content.id} data={content}/>;
                                                }
                                            )
                                        }
                                    </div>
                                </React.Fragment>
                            )
                        }
                    )
                }
            </div>
         );
    }
}
 
export default Content;