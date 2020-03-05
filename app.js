const express = require('express');
const app = express();


//using public folder for images
app.use(express.static('public'));

//view folder for the ejs files
app.set('view engine', 'ejs');

//routes 
app.use(require('./routes/index.js'));
app.use(require('./routes/albums.js'));
app.use(require('./routes/feedback.js'));
app.use(require('./routes/api.js'));

//choosing which port
app.listen(5000, () => {
    console.log("Listening on the port 5000");
});