const express = require('express');
const routes = express.Router();




routes.get('/feedback', (req, res) => {
    res.render('feedback',{
        pageTitle: 'Feedback Page',
        pageID: 'Feedback'
    })
})

module.exports = routes;