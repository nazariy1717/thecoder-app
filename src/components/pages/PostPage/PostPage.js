import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import './post-page.scss'
import { connect } from 'react-redux'
import {getArticle} from "../../../actions/articles";

import { TweenMax }  from "gsap";
import 'animation.gsap';

const mapStateToProps = state => {
    return {
        article: state.articles.article
    }
};

class PostPage extends React.Component{

    componentDidMount() {
        TweenMax.to( document.querySelector('.post'), 0.2, {
            opacity: 1
        });
    }

    componentWillMount() {
        this.props.getArticle(this.props.match.params.post);
    }

    componentWillUnmount(){
        TweenMax.to( document.querySelector('.post'), 0.02, {
            opacity: 0
        });
    }

    render(){
        let article = this.props.article;
        return(
            <div className="post-wrap">
                <Helmet>
                    <title>{article.title}</title>
                    <meta name="description" content={article.text} />
                    <meta property="og:title" content={article.title} />
                    <meta property="og:description" content={article.text}/>
                    <meta property="og:url" content={window.location.href}/>
                    <meta property="og:image" content={article.articleImg} />
                </Helmet>
                <div className="container">
                    <article className="post" itemScope itemType="http://schema.org/Article">
                        <img src={article.articleImg} alt={article.title} className="post__image" itemProp="image"/>
                        <ul className="breadcrumbs">
                            <li className="breadcrumbs__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <Link to="/" className="breadcrumbs__link" itemProp="url">Main</Link>
                            </li>
                            <li className="breadcrumbs__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <Link to="/blog" className="breadcrumbs__link" itemProp="url">Blog</Link>
                            </li>
                            <li className="breadcrumbs__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <span className="breadcrumbs__link active" itemProp="url">{article.title}</span>
                            </li>
                        </ul>
                        <div className="post__top">
                            <div className="row m-row align-justify align-middle ">
                                <div className="column">
                                    <h1 className="post__title" itemProp="name">{article.title}</h1>
                                    <p className="post__subtitle" itemProp="datePublished">{article.created}</p>
                                </div>
                            </div>
                        </div>
                        <div className="post__content" dangerouslySetInnerHTML={{__html: article.text}} itemProp="articleBody">
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, {getArticle})(PostPage);
