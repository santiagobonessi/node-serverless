const express = require('express');
const app = express();

app.get('*', (req, res) => {

    console.log('Hello world!');
    res.send({ message: 'Serverless app' })
});


module.exports = app;