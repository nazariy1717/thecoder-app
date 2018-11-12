import {ADD_ARTICLE, LOAD_ARTICLES, REMOVE_ARTICLE, VIEW_ARTICLE, CLAP_ARTICLE} from '../types';

const initialState = {
    articles: [],
    article: {}
};

export default (state=initialState, action={}) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return state;
        case LOAD_ARTICLES:
            return{
                ...state,
                articles: action.articles
            };
        case REMOVE_ARTICLE:
            return {
                ...state,
                articles: state.articles.reverse().filter(item => item._id !== action.article._id)
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