import admin from './admin';
import article from './article';


module.exports = (router) => {
    admin(router);
    article(router);
};