const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>This is all the posts</h1>')
})
//localhost3000/
//displays this information as the root folder


router.get('/most-popular', (req, res) => {
    res.send("<h1>These are the most popular posts</h1>")
})
//localhost3000/most-popular

module.exports = router;