var express = require('express');
var router = express.Router();
var multer=require('multer');
var Image =require('../models/Album');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/uploads/albums')
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
  res.render('albums', { title: 'Express' });
});
//Upload image
router.post('/', upload.array(),function (req, res, next) {
  
     // res.send(req.files)
      var n = req.body.name;
      var a = req.files[0].path
      var c = req.files[0].originalname;
      var b  = a.split('public/')
  

      var newImage=new Image({
        name:n,
        path:b,
        originalname:c

      })
      Image.addImage(newImage, function (err) {
              if (err){res.send(err)}
              else{res.send("done")}
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
  


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
