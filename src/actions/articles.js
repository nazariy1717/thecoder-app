import {
    ADD_ARTICLE, LOAD_ARTICLES, REMOVE_ARTICLE, VIEW_ARTICLE, CLAP_ARTICLE,
    LOAD_IMAGES, ADD_IMAGES, REMOVE_IMAGE
    } from '../types';
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


/* REMOVE_ARTICLE */
export const removedArticle = (article) => ({
    type: REMOVE_ARTICLE,
    article
});
export const removeArticle = article_id => dispatch =>
    api.articles.removeArticle(article_id).then(response => {
        dispatch(removedArticle(response.removedArticle));
    });



/* GET_ARTICLE */
export const viewArticle = (article) => ({
    type: VIEW_ARTICLE,
    article
});
export const getArticle = article_id => dispatch =>
    api.articles.getArticle(article_id).then(response => {
        dispatch(viewArticle(response));
    });


export function clapArticle(article_id) {
    return (dispatch) => {
        api.clapArticle(article_id).then( dispatch({ type: CLAP_ARTICLE}));
    }
}





/* ADD_IMAGES */
export const addedImages = (image) => ({
    type: ADD_IMAGES,
    image
});
export const addImages = images => dispatch =>
    api.articles.addImages(images).then(response => {
        dispatch(addedImages(response));
    });


/* LOAD_IMAGES */
export const loadedImages = (images) => ({
    type: LOAD_IMAGES,
    images
});
export function loadImages() {
    return (dispatch) => {
        api.articles.getImages().then(response => dispatch(loadedImages(response)));
    }
}

/* REMOVE_IMAGE */
export const removedImage = (image) => ({
    type: REMOVE_IMAGE,
    image
});
export const removeImage = image_id => dispatch =>
    api.articles.removeImage(image_id).then(response => {
        dispatch(removedImage(response.removedImage));
    });
