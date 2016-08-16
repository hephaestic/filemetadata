/*  submit formdata object including file upload
    upon submition, respond in json of filesize in bytes
    use multer to intepret input
*/
var config = require('./config.js');

var express = require('express');
var app = express();
var port = config.express.port;
app.listen(port, function(){
  console.log('listening at ', port);
});

var router = require('./router.js')(express);
app.use('/', router);
app.set('view engine', 'pug');
app.set('views', './');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());   //support JSON encoded bodies
// app.use(bodyParser.urlencoded({extended:true}));  //support URL encoded bodies
// app.use(express.json());
// app.use(express.urlencoded());
