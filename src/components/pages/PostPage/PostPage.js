import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from "react-helmet";
import './post-page.scss'
import { connect } from 'react-redux'
import {getArticle} from "../../../actions/articles";


const mapStateToProps = state => {
    return {
        article: state.articles.article
    }
};

class PostPage extends React.Component{

    componentWillMount() {
        this.props.getArticle(this.props.match.params.post)
    }

    render(){
        let article = this.props.article;
        console.log(this.props);
        return(
            <div className="post-wrap">
                <Helmet>
                    <title>{article.title}</title>
                    <meta name="description" content={article.description} />
                    <meta property="og:title" content={article.title} />
                    <meta property="og:description" content={article.description}/>
                    <meta property="og:url" content="https://www.thecoderdev.com/"/>
                    <meta property="og:image" content={ `https://www.thecoderdev.com/ + ${article.articleImg}`} />
                </Helmet>
                <div className="container">
                    <div className="post">
                        <img src={article.articleImg} alt={article.title} className="post__image"/>
                        <ul className="post-breadcrumb">
                            <li className="post-breadcrumb__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <Link to="/" className="post-breadcrumb__link" itemProp="url">Main</Link>
                            </li>
                            <li className="post-breadcrumb__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <Link to="/blog" className="post-breadcrumb__link" itemProp="url">Blog</Link>
                            </li>
                            <li className="post-breadcrumb__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                                <span className="post-breadcrumb__link active" itemProp="url">{article.title}</span>
                            </li>
                        </ul>
                        <div className="post__top">
                            <div className="row m-row align-justify align-middle ">
                                <div className="column">
                                    <h1 className="post__title">{article.title}</h1>
                                    <p className="post__subtitle">{article.created}</p>
                                </div>
                            </div>
                        </div>
                        <div className="post__content" dangerouslySetInnerHTML={{__html: article.text}}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, {getArticle})(PostPage);

