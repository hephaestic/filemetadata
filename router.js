var router = function(app){
  var router = app.Router();

  var multer = require('multer');
  var upload = multer({
    dest:'uploads/'
  });


  router.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
  });

  router.get('/', function(req, res){
    res.json({msg: 'Welcome'});
    //res.render('index', {title='Welcome', message="try ../input'})
  });

  router.get('/form', function(req, res){
    res.render('form', {title: 'Gimmie file'})
  });

  router.post('/getfilesize', upload.single('file'), function(req, res, next){
    res.json({
      size: req.file.size
    });
  });

  return router;
}
module.exports = router;
