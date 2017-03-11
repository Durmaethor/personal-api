
let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());


const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');


app.use(middleware.addHeaders);

//GETs
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);

app.listen(5000, () => console.log('listening on 5000'));