const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/home', (req, res) => {
   res.sendFile(path.resolve('views/index.html'));
})

app.get('/team/evan', (req, res) => {
  res.sendFile(path.resolve('views/team/evan.html'));
})

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
