const express = require('express');
const app = express();
const validate = require('./efficiency/validate');
const handleFile = require('./efficiency/file');
const handleDir = require('./efficiency/folder');
const fs = require('fs');

app.get('/', (req, res) => {
     res.send('Working');
})

app.get('/:route', (req, res) => {
     const newRoute = validate(req.params.route);
     if (fs.lstatSync(newRoute).isDirectory()) handleDir(req, res, newRoute);
     if (fs.lstatSync(newRoute).isFile()) handleFile(req, res, newRoute);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));