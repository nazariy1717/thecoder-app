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
        console.log(this.props);
        console.log(this.props.match.params.post);
        this.props.getArticle(this.props.match.params.post)
    }

    render(){
        let article = this.props.article;
        console.log(this.props);
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

