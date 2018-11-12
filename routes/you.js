var express = require('express') ;
var router = express.Router() ;
var You =  require('../models/youtubes')





/* GET users listing. */
router.get('/' ,function(req, res, next) {
    res.render('Youtube', { layout:'music' ,title: 'Express' });
  });



//Upload image
router.post('/',  (req, res, next)  => {

    var  name = req.body.name
    var rude =  req.body.url
     console.log(rude)
    let  b = []
    b = rude.split('/watch?v=') 
     var c = b[0]+ '/embed/' +b[1]
     var mayou = {
         name:name,
         url:c
       
     }

     new You(mayou).save()
         .then(resp=>{
             res.redirect('/users/editor')
             //res.redirect('/')
            }
             
             )
          .catch(err=>console.log(err.message))   

});


router.get('/you',(req,res)=>{

    You.find({})
          .sort({name:-1})
          .then(resp=>{
              res.send(resp)
          })

})


module.exports = router;