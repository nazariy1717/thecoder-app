import React from 'react';
import {Link} from 'react-router-dom';

import './post-page.scss'

class PostPage extends React.Component{
    render(){
        return(
            <div className="post-wrap">
                <div className="container">
                    <div className="post">
                        <h1 className="post__title">Title</h1>
                        <ul className="post-breadcrumb">
                            <li className="post-breadcrumb__item">
                                <Link to="/" className="post-breadcrumb__link">Main</Link>
                            </li>
                            <li className="post-breadcrumb__item">
                                <Link to="/blog" className="post-breadcrumb__link">Blog</Link>
                            </li>
                            <li className="post-breadcrumb__item">
                                <a className="post-breadcrumb__link active"></a>
                            </li>
                        </ul>
                        <div className="post__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor eos est eum eveniet facere id ipsam nisi non numquam omnis porro quae qui repudiandae, sit tempora tempore ullam voluptatum!</p>
                            <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor eos est eum eveniet facere id ipsam nisi non numquam omnis porro quae qui repudiandae, sit tempora tempore ullam voluptatum! ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor eos est eum eveniet facere id ipsam nisi non numquam omnis porro quae qui repudiandae, sit tempora tempore ullam voluptatum!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostPage;
