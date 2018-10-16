import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import './post-page.scss'

class PostPage extends React.Component{

    render(){
        return(
            <div className="post-wrap">
                <Helmet>
                    <title>Post Title</title>
                    <meta name="description" content="Lorem ipsum dolor sit amet" />
                    <meta property="og:title" content="Post Title" />
                    <meta property="og:description" content="Lorem ipsum dolor sit amet"/>
                    <meta property="og:url" content="https://www.thecoderdev.com/"/>
                    <meta property="og:image" content="http://www.offscreen.be/sites/default/files/images/movie/fight-club-3.jpg"/>
                </Helmet>
                <div className="container">
                    <div className="post">
                        <div className="post__image" style={{backgroundImage: "url(http://www.offscreen.be/sites/default/files/images/movie/fight-club-3.jpg)"}}></div>
                        <ul className="post-breadcrumb">
                            <li className="post-breadcrumb__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <Link to="/" className="post-breadcrumb__link" itemProp="url">Main</Link>
                            </li>
                            <li className="post-breadcrumb__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <Link to="/blog" className="post-breadcrumb__link" itemProp="url">Blog</Link>
                            </li>
                            <li className="post-breadcrumb__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <span className="post-breadcrumb__link active" itemProp="url">Post Title</span>
                            </li>
                        </ul>
                        <div className="post__top">
                            <div className="row m-row align-justify align-middle ">
                                <div className="column">
                                    <h1 className="post__title">Post Title</h1>
                                    <p className="post__subtitle">10.10.2018</p>
                                </div>
                                <div className="column">
                                    <ul className="post__category">
                                        <li>Development</li>
                                        <li>Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
