import {ADD_ARTICLE, LOAD_ARTICLES, VIEW_ARTICLE, CLAP_ARTICLE} from '../types';

const initialState = {
    articles: [],
    article: {}
};

export default (state=initialState, action={}) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return{
                ...state,
                articles: action.article
            };
        case LOAD_ARTICLES:
            return{
                ...state,
                articles: action.articles
            };
        case VIEW_ARTICLE:
            return{
                ...state,
                article: action.article
            };
        case CLAP_ARTICLE:
            let article = Object.assign({}, state.article);
            article.claps++;
            console.log(article);
            return {
                ...state,
                article: article
            };
        default:
            return state
    }
}