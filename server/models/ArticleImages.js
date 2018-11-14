import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    articleId: { type: String, required: true},
    articleImg: [{ type: String, required: true}]
});

module.exports = mongoose.model('ArticleImages', schema);