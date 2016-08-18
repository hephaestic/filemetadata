var router = function(app){

  var multer = require('multer');
  var upload = multer({
    dest:'uploads/'
  });


  app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
  });

  app.get('/', function(req, res){
    res.json({msg: 'Welcome'});
    //res.render('index', {title='Welcome', message="try ../input'})
  });

  app.get('/form', function(req, res){
    res.render('form', {title: 'Gimmie file'})
  });

  app.post('/getfilesize', upload.single('file'), function(req, res, next){
    res.json({
      size: req.file.size
    });
  });

  return router;
}
module.exports = router;
