const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

let feedbackData = require('../data/feedback.json')

//request(path, http verb) => handler => (middlware) => handler
//grab form data from header (json)
router.use(bodyParser.urlencoded({extended: false}));

//converts header json string into a javascript object
router.use(bodyParser.json());

//PURPOSE : posting data from client-side form
router.post('/api', (req, res) => {

    // posting data
    //grab json file
    //update json file with form data
    feedbackData.unshift(req.body); //appends the recent input to the  first in the line
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{
        if(err){
            console.log(err)
        }
        //feddback data is a javscript object. must be converted to json string.
        res.json(feedbackData);
    })
    

})
router.delete('/api/:id',(req, res)=>{

    feedbackData.splice(req.param.bind, 1);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{
        if(err){
            console.log(err)
        }
        res.json(feedbackData);
    })

    //sending back the data back to the json array
    res.json(feedbackData);
})

module.exports = router;