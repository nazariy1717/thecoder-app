import {LOAD_ARTICLES, VIEW_ARTICLE, CLAP_ARTICLE} from '../../types';
import  api  from '../../api';

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
