var express = require('express');
var router = express.Router();
var multer=require('multer');
var Video =require('../models/video');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/uploads/video')
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
  res.render('video', { layout:'music' ,title: 'Express' });
});
//Upload image
router.post('/', upload.any('myimage'),function (req, res, next) {
  
    //  res.send(req.files);
  
      var n = req.body.name;
      var a = req.files[0].path;
      var c = req.files[0].originalname;
      var b  = a.split('public/')

      console.log(b)
      var newImage=new Video({
          name: n,
          path:b[1],
          originalname:c
  
      })
      Video.addImage(newImage, function (err) {
              if (err){throw err}
              else{res.redirect('/users/editor')}
      });
  
  });

  // To get all the images/files stored in MongoDB
router.get('/images' ,function (req, res) {

  Video.getImages(function (err,images) {
      if (err) {
          throw err;
      }
      res.json(images);

  });
});

router.get('/images/:id',function (req, res) {

  Video.getImageById(req.params.id, function (err, image) {
      if (err) {
          throw err;
      }
      //res.download(genres.path);
      res.send(image.path)
  });
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


