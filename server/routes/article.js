import articleController from "./../controllers/article.ctrl";

module.exports = (router) => {

    /* get all articles */
    router.route('/articles').get(articleController.getAll);

    /* add an article */
    // router.route('/article').post(multipartWare, articleController.addArticle);

    /* clap on an article */
    router.route('/article/clap').post(articleController.clapArticle);

    /* get an article */
    router.route('/article/:id').get(articleController.getArticle)

};