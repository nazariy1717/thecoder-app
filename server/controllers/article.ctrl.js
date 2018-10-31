import Article from './../models/Article';


module.exports = {

    addArticle: (req, res, next) => {
        let { text, title, claps, description } = req.body;
    },

    getAll: (req, res, next) => {

    },

    clapArticle: (req, res, next) => {

    },

    getArticle: (req, res, next) => {

    }
};
