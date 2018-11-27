import mongoose from 'mongoose';

let schema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    text: { type: String, required: true},
    claps: { type: Number, required: true},
    articleImg: { type: String, required: true},
    created: { type: String, required: true},
    slug: { type: String, required: true}
});


schema.methods.clap = function() {
    this.claps++;
    return this.save()
};


module.exports = mongoose.model('Article', schema);