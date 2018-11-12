var express = require('express')
var router = express.Router()
var music =  require('../models/image')


//get all album
 router.get('/',(req,res)=>{
     res.render('valbums',)
 })




module.exports = router;
