import mongoose from 'mongoose';

let ArticleSchema = new mongoose.Schema({
    title: String,
    description: String,
    feature_img: String,
    text: String,
    category: Array,

    claps: Number,
});

ArticleSchema.methods.clap = function() {
    this.claps++;
    return this.save()
};

module.exports = mongoose.model('Article', ArticleSchema);