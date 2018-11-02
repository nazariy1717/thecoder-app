import {combineReducers} from 'redux';
import admin from './reducers/admin'
import articles from './reducers/articles'

export default combineReducers({
    admin,
    articles
});
