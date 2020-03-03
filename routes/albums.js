const express = require('express');
const routes = express.Router();
let data = require('../data/data.json');

routes.get('/albums', (req, res) => {
    let pagePhotos = [];
    data.theWeeknd.forEach((img)=>{
        pagePhotos = pagePhotos.concat(img);
    })
    let covArt = [];
    data.theWeeknd.forEach((img)=>{
        covArt = covArt.concat(img.coverArt);
    })
    res.render('albums',{
        pageTitle: "All Albums",
        cover_art: covArt,
        theWeekndPage: data.theWeeknd,
        pageID: "albumList"
    });
    
});

routes.get('/albums/:albumName', (req, res) => {
    let pageAlbum = [];
    let pageArt = [];
    let trackList = [];
    data.theWeeknd.forEach((albumObj)=>{
        if(albumObj.albumTitle == req.param('albumName')){
            pageAlbum.push(albumObj);
            pageArt = albumObj.coverArt;
        
        }
        
    })
    data.theWeeknd.forEach((trackObj)=>{
        trackList = trackList.concat(trackObj.tracks)
        
    })
    res.render('albums',{
        pageTitle: "Album Details",
        albumName: pageAlbum.albumTitle,
        coverart: pageArt,
        theWeekndPage: pageAlbum,
        pageID: 'AlbumPage',
        songs: trackList
    });
});




module.exports = routes;