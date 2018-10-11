import React from 'react';
import {Link} from 'react-router-dom';
import './blog-item.scss'

const BlogItem = (props) =>{
    return(
        <div className="column col-md-4" >
            <article className="blog-item">
                <Link to={props.data.url}>
                    <figure className="blog-item__figure">
                        <img src={props.data.image} alt={"blog image "+props.data.id} title={"blog image "+props.data.id}/>
                    </figure>
                    <div className="blog-item__content">
                        <span className="blog-item__date">{props.data.date}</span>
                        <span className="blog-item__title">{props.data.title}</span>
                        <p className="blog-item__desc">{props.data.description_short}</p>
                        <ul className="blog-item__list">
                            {props.data.category.map((item,index)=>{
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </Link>
            </article>
        </div>
    )
};

export default BlogItem;