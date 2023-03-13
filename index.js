//load express
const express = require('express');
//call express (create app, name variable app)
const app = express();

//add routes after creating routes modules index.js

//IMPORT ROUTES
const users = require('./routes/users')
const posts = require('./routes/posts')
//node looks for index.js files by default - otherwise you will have to specify the name like ./routes/posts/myPosts => next step below:
//THEN ATTACH ROUTES TO MAIN APP
app.use('/users', users)
app.use('/posts', posts)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the homepage</h1>");
});

// app.get('/users', (req, res) => {
//     res.send('<h1>This is the users page</h1>')
// });
// //retrieves data
// //in real world app this would yield a json array of json objects of users registered or something similar
    //moved to routes/posts and routes/users
// app.post('/users', (req, res) => {
//     res.send('You have accessed the users route with the POST method')
// });
// //insert into list of users
// //client sends json object

app.all('/my-route', (req, res) => {
    res.send('This route could have been accessed with any HTML method')
})//hardcoded routes => introduce dynamic routes and query parameters


app.listen(3000);


