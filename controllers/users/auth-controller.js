import * as dao from './users-dao.js';

const AuthController = (app) => {

    const register = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const user = await dao.findUserByEmail(email);
        if (user) {
            res.sendStatus(409)
            return;
        }
        const newUser = await dao.createUser(req.body);
        req.session['currentUser'] = newUser;
        res.json(newUser)
    }
    const login = async (req, res) => {

        const email = req.body.username;
        const password = req.body.password;
        //console.log(email, password)
        const user = await dao.findUserByCredentials(email, password);
        //console.log(user)
        if (user) {
            req.session['currentUser'] = user;
            console.log('logged in: set req.session[\'currentUser\'] to')
            console.log(req.session['currentUser'])
            res.json(user);
        } else {
            res.sendStatus(404);
        }


    }
    const profile = async (req, res) => {
        const currentUser = req.session['currentUser'];
        console.log('getting profile for ')
        console.log(currentUser)
        if (!currentUser) {
            res.sendStatus(404);
            return;
        }
        res.json(currentUser)
    }
    const logout = async (req, res) => {
        console.log('logging out:')
        req.session['currentUser'] = null;
        res.sendStatus(200);
    }
    const update = async (req, res) => {
        const userId = req.params.uid;
        const updates = req.body;
        const status = await dao.updateUser(userId, updates);
        res.json(status);
    }

    app.post('/api/users/register', register)
    app.post('/api/users/login', login)
    app.get('/api/users/profile/:uid', profile)
    app.post('/api/users/logout', logout)
    app.put('/api/users/profile/:uid', update)
}

export default AuthController;