
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

const searchPostByText = async (req, res) => {

    let { text } = req.query;

    if (!text || text.length < 0) {
        return res.json({ message: 'please input text to query' })
    }

    text = text.replace(/\s/g,"|");

    console.log("query ",new RegExp(text))

    try {
        const posts = await Post.find({ title: { $regex: new RegExp(text) } });
        res.json(posts);

    } catch (error) {
        console.log("get posts error ", error);
        res.json({ message: "not found in database" });
    }
}


module.exports = { 
    getAllPost,
    addPost,
    searchPostByText
}