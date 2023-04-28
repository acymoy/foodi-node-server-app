import * as dao from './posts-dao.js';
import { findUser } from '../user/user-dao.js';

const PostController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('hello sir')
    })

    app.get('/api/posts', findPosts);
    app.get('/api/posts/user/:uid', findPostsByUserId);
    app.get('/api/posts/followed/:uid', findPostsByFollowedUsers);
    app.post('/api/posts', createPost);
    //app.put('/api/posts/:pid', updatePost);
    app.delete('/api/posts/:pid', deletePost);
}

const findPosts = async (req, res) => {
    const posts = await dao.findPosts();
    res.json(posts);
}

const findPostsByUserId = async (req, res) => {
    //console.log('post-controller: finding a users posts with id ' + req.params.uid)
    const userId = req.params.uid;
    const posts = await dao.findUserPost(userId);
    //console.log('returning ' + posts)
    res.json(posts);
}

const findPostsByFollowedUsers = async (req, res) => {
    const userId = req.params.uid;
    const userProfile = await findUser(userId)
    //console.log('finding posts by followed users -> ')
    //console.log(userProfile[0].following)
    const posts = await dao.findFollowedPosts(userProfile[0].following);
    res.json(posts);
}

const createPost = async (req, res) => {
    const newPost = req.body;
    const insertedPost = await dao.createPost(newPost);
    res.json(insertedPost);
}

// const updatePost = async (req, res) => {

// }

const deletePost = async (req, res) => {
    const postId = req.params.pid;
    const status = await dao.deletePost(postId);
    res.json(status);
}

export default PostController;