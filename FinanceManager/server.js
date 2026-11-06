const express = require('express');

const app = express();

app.use(express.static('site'));

app.get('/', (req, res) => {
    res.send('App is working!');
});

app.listen(3000, () => {
    console.log('Server started: http://localhost:3000');
});