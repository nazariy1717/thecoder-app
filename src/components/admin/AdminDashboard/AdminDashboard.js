import React, {Component} from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import { connect } from 'react-redux'
import {loadArticles, removeArticle} from '../../../actions/articles';
import './admin-dashboard.scss';
import Notifications, {notify} from 'react-notify-toast';


const mapStateToProps = state => {
    return {
        articles: state.articles.articles
    }
};

class AdminDashboard extends Component{

    constructor(props){
        super(props);
        this.removePost = this.removePost.bind(this);
    }

    componentDidMount(){
        this.props.loadArticles();
        console.log(this.props.articles);
    }

    componentWillReceiveProps(nextProps) {

    }

    removePost(id){
        this.props.removeArticle(id).then(()=>notify.show("Article deleted", "success"));
    }

    render(){
        const articles = this.props.articles.map((item, key)=>{
           return(
               <div className="column col-lg-4 admin-post" key={key}>
                   <div className="admin-post__content">
                       <figure className="admin-post__figure">
                           <img src={item.articleImg} alt="" className="admin-post__img"/>
                       </figure>
                       <div className="admin-post__inner">
                           <span className="admin-post__date">{item.created}</span>
                           <span className="admin-post__title">{item.title}</span>
                           <div className="admin-post__desc"
                                dangerouslySetInnerHTML={{__html: item.description}}>
                           </div>
                           <div className="row m-row align-justify align-middle">
                               <div className="column">
                                   claps: <span>{item.claps}</span>
                               </div>
                               <div className="column">
                                   <button className="btn admin-post__btn --edit">Edit</button>
                                   <button onClick={this.removePost.bind(this, item._id)}
                                       className="btn admin-post__btn --remove">
                                       Remove
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           )
        });
        console.log(articles);
        return(
            <div className="admin-wrapper">
                <AdminHeader />
                <Notifications />
                <div className="admin-content">
                    <div className="container">
                        <h1 className="admin-content__title">All posts</h1>
                        <div className="row m-row">
                            {articles}
                            { (!articles.length) ? <div>Not found any posts</div> : '' }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, {loadArticles, removeArticle})(AdminDashboard);
