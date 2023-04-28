import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';

// Controller imports
import PostsController from './controllers/posts/posts-controller.js';
import UserController from './controllers/user/user-controller.js';
// import RestaurantController from './controllers/restaurants/restaurant-controller.js';
import AuthController from './controllers/users/auth-controller.js';

// process.env.DB_CONNECTION_STRING || 
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/foodi';

mongoose.connect(CONNECTION_STRING)


const app = express()
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/connection', (req, res) => res.sendStatus(mongoose.connection.readyState.toString()))

app.listen(process.env.PORT || 4000, () => console.log('Server now listening on 4000...'))


PostsController(app);
UserController(app);
AuthController(app);

console.log(mongoose.connection.readyState)