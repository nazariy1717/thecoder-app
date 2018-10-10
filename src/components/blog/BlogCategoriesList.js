import React from 'react';
import './blog-categories-list.scss'

class BlogCategoriesList extends React.Component{
    render(){
        return(
            <ul className="blog-categories-list">
                <li className="blog-categories-list__item">
                    <a href="/" className="blog-categories-list__link active">all</a>
                </li>
                <li className="blog-categories-list__item">
                    <a href="/" className="blog-categories-list__link">design</a>
                </li>
                <li className="blog-categories-list__item">
                    <a href="/" className="blog-categories-list__link">development</a>
                </li>
                <li className="blog-categories-list__item">
                    <a href="/" className="blog-categories-list__link">company news</a>
                </li>
                <li className="blog-categories-list__item">
                    <a href="/" className="blog-categories-list__link">cases</a>
                </li>
            </ul>
        )
    }
}

export default BlogCategoriesList;
