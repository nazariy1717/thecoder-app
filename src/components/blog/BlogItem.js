import React from 'react';
import {Link} from 'react-router-dom';
import './blog-item.scss'

const BlogItem = (props) =>{
    let item = props.data;
    return(
        <div className="column col-md-4" >
            <article className="blog-item">
                <Link to={`/blog/${item.slug}`}>
                    <figure className="blog-item__figure">
                        <img src={item.articleImg} alt={item.title} title={item.title}/>
                    </figure>
                    <div className="blog-item__content">
                        <span className="blog-item__date">{item.created}</span>
                        <span className="blog-item__title">{item.title}</span>
                        <div className="blog-item__desc"
                           dangerouslySetInnerHTML={{__html: item.description}}>
                        </div>
                        <ul className="blog-item__list">
                            <li>claps {item.claps}</li>
                        </ul>
                    </div>
                </Link>
            </article>
        </div>
    )
};

export default BlogItem;