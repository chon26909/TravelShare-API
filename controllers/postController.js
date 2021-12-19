
const Post = require('../models/Post.model');

const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
    } catch (error) {
        console.log('error get post', error)
        res.json({ message: 'note found in database'});
    }
}

const addPost = async = (req,res) => { 
    try {
        
    } catch (error) {
        
    }
}

module.exports = { 
    getAllPost,
    addPost
}