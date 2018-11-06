import {ADD_ARTICLE, LOAD_ARTICLES, VIEW_ARTICLE, CLAP_ARTICLE} from '../types';
import api from '../api';


/* ADD_ARTICLE */
export const adminAddedArticle = (article) => ({
    type: ADD_ARTICLE,
    article
});
export const adminAddArticle = article => dispatch =>
    api.articles.addArticle(article).then(response => {
        dispatch(adminAddedArticle(response.createdArticle));
    });


/* LOAD_ARTICLES */
export const loadedArticles = (articles) => ({
    type: LOAD_ARTICLES,
    articles
});
export function loadArticles() {
    return (dispatch) => {
        api.articles.getArticles().then(response => dispatch(loadedArticles(response)));
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
