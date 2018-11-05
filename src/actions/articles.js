import {ADD_ARTICLE, LOAD_ARTICLES, VIEW_ARTICLE, CLAP_ARTICLE} from '../types';
import api from '../api';

export const adminAddedArticle = (article) => ({
    type: ADD_ARTICLE,
    article
});

export const adminAddArticle = article => dispatch =>
    api.articles.addArticle(article).then(article =>{
        console.log(article);
        dispatch(adminAddedArticle(article));
    });








export function loadArticles() {
    return (dispatch) => {
        api.getArticles().then( res => {
            let articles = res.data;
            dispatch({ type: LOAD_ARTICLES, articles })
        });
    }
}

export function getArticle(article_id) {
    return (dispatch) => {
        api.getArticle(article_id).then( res => {
            let article = res.data;
            dispatch({ type: VIEW_ARTICLE, article })
        });
    }
}

export function clapArticle(article_id) {
    return (dispatch) => {
        api.clapArticle(article_id).then( dispatch({ type: CLAP_ARTICLE}));
    }
}
