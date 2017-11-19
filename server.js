const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const express = require('express');

const public_dir = path.join(__dirname, 'dist');
const port = process.env.PORT || 8080;
const app = express();

app.use(helmet());

// Compress requests. 
app.use(compression());

// Serving static files 
app.use(express.static(public_dir));

// Redirect anything not found back to the homepage. 
app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(port);
console.log(`Express is listening on port ${port}`)