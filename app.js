
// requiring dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const forceSsl = require('force-ssl-heroku');

// forcing ssl redirect (needed for stripe api to make transaction)
app.use(forceSsl);

// server back static files(front-end files)
app.use(express.static(path.join(__dirname, './public')));

// initializing body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handles index file separately(front-end files)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


// port listening on
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () => {
  console.log('Listening on port: ', app.get('port'));
});
