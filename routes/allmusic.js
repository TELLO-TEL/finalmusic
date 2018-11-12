var express = require('express')
var router = express.Router()
var music =  require('../models/image')


//get all music
 router.get('/',async (req,res)=>{
 var c= []

    await music.find({})
    .then(doc => {
      c= doc
    })
    .catch(err => console.log(err))
   



     res.render('singles',{
         musics:c
     })
 })




module.exports = router;
