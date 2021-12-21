
const Post = require('../models/Post.model');

const getAllPost = async (req, res) => {

    console.log('get post');

    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.log('error get post', error)
        res.json({ message: 'note found in database'});
    }
}

const addPost = async = (req,res) => { 

    console.log('add post');

    console.log(req.body);

    const data = req.body;

    try {
        Post.create(data)
        res.json({ message: 'create success'})
    } catch (error) {
        console.log(error);
    }
}

module.exports = { 
    getAllPost,
    addPost
}