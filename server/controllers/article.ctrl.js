import Article from './../models/Article';
import mongoose from 'mongoose';
import moment from 'moment';


module.exports = {

    addArticle: (req, res, next) => {
        const article = new Article({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            text: req.body.text,
            claps: req.body.claps,
            articleImg: req.file.path,
            created: moment().format('DD-MM-YYYY')
        });
        article.save().then(result => {
            res.status(201).json({
                message: "Article created successfully",
                createdArticle: {
                    title: result.title,
                    description: result.description,
                    text: result.text,
                    claps: result.claps,
                    _id: result._id,
                    created: result.created,
                    request: {
                        type: 'GET',
                        url: `http://localhost:8080/article/` + result._id
                    }
                }
            });
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
    },


    getAll: (req, res, next) => {
        Article.find()
            .select("title description text claps articleImg _id created")
            .exec()
            .then(docs => {
                const response = docs.map(doc => {
                    return {
                        title: doc.title,
                        description: doc.description,
                        text: doc.text,
                        claps: doc.claps,
                        articleImg: "http://localhost:8080/" + doc.articleImg,
                        _id: doc._id,
                        created: doc.created,
                        request: {
                            type: "GET",
                            url: "http://localhost:8080/article/" + doc._id
                        }
                    };
                });
                res.status(201).json(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });


    },

    clapArticle: (req, res, next) => {

    },

    getArticle: (req, res, next) => {

    }
};
