import {combineReducers} from 'redux';
import adminAuthReducer from './reducers/adminAuthReducer'
import articles from './reducers/articles'

export default combineReducers({
    adminAuthReducer,
    articles
});
