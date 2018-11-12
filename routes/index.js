var express = require('express');
var router = express.Router();
var multer=require('multer');
var Image =require('../models/image');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/uploads/music')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

var upload = multer({
  storage: storage
});


/* GET users listing. */
router.get('/' ,function(req, res, next) {
  res.render('index', { layout:'music',title: 'Express'});
});
//Upload image
router.post('/', upload.any('myimage','coverPhoto'),function (req, res, next) {
  

         var n = req.body.name;
         var a = req.files[0].path
         var p = req.files[1].path
         var c = req.files[0].originalname
         var b  = a.split('public/')
         var x =  p.split('public/')

      var newImage=new Image({
          name:n,
          path:b[1],
          originalname:c,
          photo: x[1]
  
      })
      
     


      Image.addImage(newImage, function (err) {
              if (err){res.send(err)}
              else{res.redirect('/users/editor')}
      });
  
  });

  // To get all the images/files stored in MongoDB
router.get('/images', ensureAuthenticated ,function (req, res) {

  Image.getImages(function (err,images) {
      if (err) {
          throw err;
      }
      res.json(images);

  });
});

router.get('/images/:id',ensureAuthenticated ,function (req, res) {

  Image.getImageById(req.params.id, function (err, image) {
      if (err) {
          throw err;
      }
      //res.download(genres.path);
      res.send(image.path)
  });
});


/* GET users listing. */
router.get('/editor' ,function(req, res, next) {
    res.render('editor', { title: 'Express'});
  });
  


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}




module.exports = router;