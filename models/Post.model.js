const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String },
    caption : { type: String },
    category: { type: String },
    photo_url: { type: String },
    date_create: { type: String },
    location: { type: String },
    province: { type: String },
    tags: Array
})

module.exports = mongoose.model('post', postSchema);