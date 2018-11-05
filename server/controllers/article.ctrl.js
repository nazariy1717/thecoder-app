import Article from './../models/Article';
import mongoose from 'mongoose';

module.exports = {

    addArticle: (req, res, next) => {
        console.log(req.body);

        const article = new Article({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            text: req.body.text,
            claps: req.body.claps,
            articleImg: req.file.path,
        });
        article.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: "Created article successfully",
                createdArticle: {
                    title: result.title,
                    description: result.description,
                    text: result.text,
                    claps: result.claps,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: "http://localhost:8080/article/" + result._id
                    }
                }
            });
        });




    },

    getAll: (req, res, next) => {

    },

    clapArticle: (req, res, next) => {

    },

    getArticle: (req, res, next) => {

    }
};
