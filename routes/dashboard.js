var express = require('express');
var router = express.Router();
var youtubes = require('../models/youtubes')
var events = require('../models/Events')
var music = require('../models/image')
var videos = require('../models/video')





router.get('/', async (req, res, next) => {


  var a = [];
  var b = [];
  var c = [];
  var d = [];
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
res.render('dashboard',{
  
  a:a ,b:b ,c:c,d:d})
})





 router.get('/videos',(req,res)=>{
   res.render('videos')
 })
 router.get('/allalbums',(req,res)=>{
   res.render('valbums')
 })
 router.get('singles',(req,res)=>{
   res.render('singles')
 })

module.exports = router;