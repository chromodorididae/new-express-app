const express = require('express')
const router = express.Router()

//FIRST DRAFT
// router.get('/', (req, res) => {
//     res.send('<h1>This is the list of all users</h1>')
// }) //localhost3000 displays /users with above h1

//QUERY PARAMETERS BELOW
//SECOND DRAFT

router.get('/', (req, res) => {
    res.send(`<h1>${req.query.theme} ${req.query.color}</h1>`)
}) //localhost3000 displays /users with above h1
//localhost:3000/users?theme=dark displays dark in h1
//localhost:3000/users?theme=dark&color=black
//displays dark black


//FIRST DRAFT
// router.get('/wittcode', (req, res) => {
//     res.send("<h1>This is wittcode's user profile</h1>")
// }) //localhost 3000 displays /users/wittcode with h1 above
// //this is a route for one user - realistically this would be far too many to use

//ROUTE PARAMETERS BELOW
//SECOND DRAFT

//ADD BACKTICKS - DYNAMIC ROUTE
//multiple parameters may be used such as /:username/:favFood
// after profile add "and their favorite food is ${req.params.favFood}"
router.get('/:username/:favFood', (req, res) => {
    res.send(`<h1>This is ${req.params.username}'s profile and their favorite food is ${req.params.favFood}</h1>`)
}) //clicking bob becomes /bob etc.
//localhost 3000/users/anyusernameisrenderednow
//displays the h1 above
//KEYS PASSED TO ROUTE CONTAINED WITHIN REQ.PARAMS
//the keys are the value like username and favFood

//dynamic routes accept route parameters

module.exports = router;