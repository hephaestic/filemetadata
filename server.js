/*  submit formdata object including file upload
    upon submition, respond in json of filesize in bytes
    use multer to intepret input
*/

////CAN ALSO BE DONE WITH MULTIPARTY
var config = require('./config.js');

var express = require('express');
var app = express();
var port = config.express.port;
app.listen(port, function(){
  console.log('listening at ', port);
});

var router = require('./router.js');
router(app);
app.set('view engine', 'pug');
app.set('views', './');
