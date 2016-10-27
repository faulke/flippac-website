const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/home', (req, res) => {
   res.sendFile(path.resolve('views/index.html'));
});

app.get('/team/evan', (req, res) => {
  res.sendFile(path.resolve('views/team/evan.html'));
});
