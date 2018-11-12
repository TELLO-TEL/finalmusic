var express = require('express')
var router = express.Router()
var video =  require('../models/video')


//get all music
 router.get('/',async(req,res)=>{

    var c= []

    await video.find({})
    .then(doc => {
      c= doc
    })
    .catch(err => console.log(err))
   
     res.render('videos',{
         video:c
     })
 })



module.exports = router;
