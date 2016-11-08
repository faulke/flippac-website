const express = require('express');
const path = require('path');
const app = express();

// test

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.sendFile(path.resolve('views/index.html'));
});

app.get('/team/evan', (req, res) => {
  res.sendFile(path.resolve('views/team/evan.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
