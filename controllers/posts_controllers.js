const postSchemaModel = require('../models/posts')
module.exports.create_post = function (req, res){
    // return res.render('profile.ejs',{title:"pro"});
    console.log(req.user)
    postSchemaModel.create({
        contents: req.body.contents,
        user:req.user._id
    },(err,post)=>{
        if (err){console.log("error"+err);return}
        console.log(post);
        return res.redirect('back');
    })
}