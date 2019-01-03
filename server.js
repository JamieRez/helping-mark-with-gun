const express = require('express');
const app = express();
const Gun = require('gun');

//App Setting
app.set('views', './client')
app.set('view engine', 'pug');
app.use(Gun.serve).use(express.static(__dirname));
app.use(express.static('client'))


app.get('/', (req, res) => {
  res.render('index');
})

let server = app.listen(process.env.PORT || '3000');
let gun = Gun({
  file: 'data.json', // local testing and development
  web: server
});
