import React from 'react';
import './blog-wrap.scss'
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'
import BlogItem from '../../blog/BlogItem'
import {loadArticles} from '../../../actions/articles';
import {Link} from "react-router-dom";


const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    }
};

class BlogPage extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.loadArticles();
    }

    render(){
        const articles = this.props.articles;
        return(
            <section className="blog-wrap">
                <Helmet>
                    <title>Blog the coder </title>
                    <meta name="description" content="Blog the coder " />
                    <meta property="og:title" content="Blog the coder " />
                    <meta property="og:description" content="Blog the coder "/>
                    <meta property="og:url" content="https://www.thecoderdev.com/blog"/>
                </Helmet>
                <div className="container">
                    <div className="row m-row align-justify">
                        <div className="column">
                            <div className="our-team__title title-box">
                                <h1 className="title-box__inner">Blog</h1>
                            </div>
                        </div>
                    </div>
                    <div className="blog-wrap__content">
                        <div className="row m-row">
                            {
                                (articles.length) ?
                                    articles.map((item, index) => {
                                        return <BlogItem data={item} key={index}/>
                                    }) :
                                    <div>
                                        Not found any posts
                                    </div>
                            }
                        </div>
                    </div>
                    <ul className="post-breadcrumb">
                        <li className="post-breadcrumb__item" itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <Link to="/" className="post-breadcrumb__link" itemProp="url">Main</Link>
                        </li>
                        <li className="post-breadcrumb__item"  itemScope itemType = "http://data-vocabulary.org/Breadcrumb">
                            <span className="post-breadcrumb__link active">Blog</span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}


export default connect(mapStateToProps, {loadArticles})(BlogPage);


