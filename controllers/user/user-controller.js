import * as dao from './user-dao.js';

const UserController = (app) => {
    app.get('/api/user/:uid', findUser);
    app.get('/api/user/:followStatus/:uid', findArrayOfUsers)

    app.put('/api/user/:uid', updateUser);
    app.post('/api/user', createUser);

}

const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
}

const findUser = async (req, res) => {
    const userId = req.params.uid;
    const user = await dao.findUser(userId);
    //console.log('found user ' + userId)
    //console.log(user)
    res.json(user);
}

const updateUser = async (req, res) => {
    const userId = req.params.uid;
    const updates = req.body;
    const status = await dao.updateUser(userId, updates);
    res.json(status);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await dao.createUser(newUser);
    res.json(insertedUser);
}

// receives an array of user ids and returns an array of users
const findArrayOfUsers = async (req, res) => {
    
    const userId = req.params.uid
    const followStatus = req.params.followStatus
    
    const userProfile = await dao.findUser(userId)
    //console.log('user profile: ')
    //console.log(userProfile[0])
    //console.log('followers')
    //console.log(userProfile[0].followers)

    let users;
    if (followStatus === 'followers') {
        users = await dao.findArrayOfUsers(userProfile[0].followers);
    } else if (followStatus === 'following') {
        users = await dao.findArrayOfUsers(userProfile[0].following);
    }
    //console.log('users found:')
    //console.log(users)
    //console.log(Array.isArray(users))
    res.json(users);
}

export default UserController;