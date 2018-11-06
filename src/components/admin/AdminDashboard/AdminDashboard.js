import React, {Component} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { connect } from 'react-redux'
import {loadArticles} from '../../../actions/articles';
import './admin-dashboard.scss';


const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    }
};

class AdminDashboard extends Component{

    componentDidMount(){
        this.props.loadArticles();
    }

    render(){
        console.log(this.props.articles);
        console.log(this.props.articles.articles);
        const articles = this.props.articles.map((item, key)=>{
           return(
               <div className="column col-lg-4 admin-post" key={key}>
                   <div className="admin-post__content">
                       <figure className="admin-post__figure">
                           <img src={item.articleImg} alt="" className="admin-post__img"/>
                       </figure>
                       <span className="admin-post__title">{item.title}</span>
                       <div className="admin-post__desc">{item.description}</div>
                       <div className="row align-justify align-middle">
                           <div className="column">
                               claps:  <span>{item.claps}</span>
                           </div>
                           <div className="column"></div>
                       </div>
                   </div>
               </div>
           )
        });
        return(
            <div className="admin-wrapper">
                <AdminHeader />
                <div className="admin-content">
                    <div className="container">
                        <h1 className="admin-content__title">All posts</h1>
                        <div className="row m-row">
                            {articles}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {loadArticles})(AdminDashboard);
