var express = require('express');
var router = express.Router();
var youtubes = require('../models/youtubes')
var events = require('../models/Events')
var music = require('../models/image')
var videos = require('../models/video')
var albums = require('../models/video')


router.get('/', async (req, res, next) => {


  var a = [];
  var b = [];
  var c = [];
  var d = [];
  var e = [];
//console.log("we are getting youtubes")
  await youtubes.find({})
    .then(doc => {
      a = doc
    })
    .catch(err => console.log(err))

    

  await events.find({})
    .then(doc => {
      b = doc
    })
    .catch(err => console.log(err))
 
  await music.find({})
    .then(doc => {
      c = doc
    })
    .catch(err => console.log(err))
   

    await videos.find({})
    .then(doc => {
      d= doc
    })
    .catch(err => console.log(err))


    await albums.find({})
    .then(doc => {
      e= doc
    })
    .catch(err => console.log(err))
res.render('editor',{layout:'music' ,a:a ,b:b ,c:c,d:d ,e:e})
})



//delete youtube
router.delete('youtube/:id',(req,res)=>{

    youtubes.findByIdAndDelete(req.params.id)
            .then(Response=>{
                res.send('we have deleted the youtube')
            })
            .catch(err=>{
                res.send(err.message)
            })
})
//delete music
router.delete('music/:id',(req,res)=>{

 
})

//delete events
router.delete('/events/:id',(req,res)=>{
 
})

//albums
router.delete('albums/:id',(req,res)=>{
 
})

//delete video
router.delete('/video/:id',(req,res)=>{

})








module.exports = router;