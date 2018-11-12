var express = require('express') ;
var router = express.Router() ;
var Events =  require('../models/Events')





/* GET users listing. */
router.get('/' ,function(req, res, next) {
    res.render('Events', { title: 'Express' });
  });



//Upload image
router.post('/',  (req, res, next)  => {
  
     var maevents = {
         name:req.body.name,
         place:req.body.place,
         time:req.body.time,
         date:req.body.date
     }

     new Events(maevents).save()
         .then(resp=>{
             res.send({message:'done'})
            // res.redirect('/')
            }
             
             )
          .catch(err=>res.send(err.message))   

});


router.get('/events',(req,res)=>{

    Events.find({})
          .sort({date:1})
          .then(resp=>{
              res.send(resp)
          })

})


module.exports = router;