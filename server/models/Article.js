import mongoose from 'mongoose';

let ArticleSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    text: { type: String, required: true},
    claps: { type: Number, required: true},
    articleImg: { type: String, required: true}
});

ArticleSchema.methods.clap = function() {
    this.claps++;
    return this.save()
};

module.exports = mongoose.model('Article', ArticleSchema);