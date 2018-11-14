import Article from './../models/Article';
import ArticleImages from './../models/ArticleImages';
import mongoose from 'mongoose';
import moment from 'moment';


module.exports = {

    addArticle: (req, res, next) => {
        console.log(req.files['image'][0].path);
        console.log('---------');
        console.log(req.files['images']);
        console.log('---------');
        req.files['images'].map(item=>{
            console.log(item.path);
        });
        const newArticle = new Article({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            text: req.body.text,
            claps: req.body.claps,
            articleImg: req.files['image'][0].path,
            created: moment().format('DD-MM-YYYY'),
            slug: req.body.title.replace(/[\\/:"*?+!_.’”“<>|]/g, '').replace(/ /g, '-')
        });
        const images = new ArticleImages({
            _id: new mongoose.Types.ObjectId(),
            articleId: newArticle._id,
            articleImg: req.files['images'].map(item=> item.path)
        });
        console.log(images);
        images.save();
        newArticle.save().then(result => {
            res.status(201).json({
                message: "Article created successfully",
                createdArticle: {
                    title: result.title,
                    description: result.description,
                    text: result.text,
                    claps: result.claps,
                    _id: result._id,
                    created: result.created,
                    slug: result.slug
                }
            });
        })
        .catch(err => {
            res.status(500).json({error: err});
        });
    },

    getAll: (req, res, next) => {
        Article.find()
            .select("title description text claps articleImg _id created slug")
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
                        slug: doc.slug
                    };
                });
                res.status(201).json(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });


    },

    removeArticle: (req, res, next) => {
        const id = req.params.articleId;
        Article.findOneAndDelete({ _id: id })
            .exec()
            .then(result =>{
                res.status(200).json({
                    message: 'Article deleted',
                    removedArticle: {
                        _id: result._id,
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },


    getArticle: (req, res, next) => {
        const slug = req.params.id;
        Article.findOne({slug: slug})
            .select('title text claps articleImg created')
            .exec()
            .then(docs => {
                if (docs) {
                    const response = {
                            title: docs.title,
                            text: docs.text,
                            claps: docs.claps,
                            articleImg: "http://localhost:8080/" + docs.articleImg,
                            created: docs.created,
                        };
                    res.status(201).json(response);
                } else {
                    res
                        .status(404)
                        .json({ message: "No valid entry found for provided ID" });
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err });
            });
    },





    clapArticle: (req, res, next) => {

    },


};
