const express = require('express');
const castelli = require('./castelli.json'); 
const app = express();
const path = require('path');
var cors = require('cors'); 
app.use(cors()); 

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Castelli',
    castelli: castelli.castells 
  });
});

app.get('/api/castelli', (req,res) => {
    res.sendFile(path.join(__dirname, '/castelli.json'));
    res.setHeader('Content-Type', 'application/json');
});

app.get('/istruzioni', (req, res) => {
  const ca = castelli.castells.find(c => c.Number === req.query.Number);
  res.render('istruzioni', {
    title: `Istruzioni per: ${ca.Name}`,
    ca,
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});