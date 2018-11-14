import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    articleImg: { type: String, required: true}
});

module.exports = mongoose.model('ArticleImages', schema);