const express = require('express');
const routes = express.Router();

let data = require('../data/data.json');

routes.get('/', (req, res) => {
    let pageAlbumPhotos = [];
    data.theWeeknd.forEach((albumObj)=>{
        pageAlbumPhotos = pageAlbumPhotos.concat(albumObj.coverArt);
    })
    res.render('index',{
        displayCover: pageAlbumPhotos
    });
});

module.exports = routes;