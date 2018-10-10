import React from 'react';
import {Link} from 'react-router-dom';
import './blog-item.scss'

export default class BlogItem extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="column col-md-4" >
                <article className="blog-item">
                    <Link to={this.props.data.url}>
                        <figure className="blog-item__figure">
                            <img src={this.props.data.image} alt={"blog image "+this.props.data.id} title={"blog image "+this.props.data.id}/>
                        </figure>
                        <div className="blog-item__content">
                            <span className="blog-item__date">{this.props.data.date}</span>
                            <span className="blog-item__title">{this.props.data.title}</span>
                            <p className="blog-item__desc">{this.props.data.description_short}</p>
                            <ul className="blog-item__list">
                                {this.props.data.category.map((item,index)=>{
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </Link>
                </article>
            </div>
        )
    }
}