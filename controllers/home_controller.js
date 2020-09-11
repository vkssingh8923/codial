const posts = require('../models/posts')
module.exports.home = function (req, res){


    // posts.find({},(err,posts_list)=>{
    //     if (err){return}
    //     // return res.render('home.ejs',{
        //     posts_l:posts_list,
        //     title:"hell"});
        
    posts.find({}).populate('user').exec((err,posts_list)=>{
        if (err){return}
        return res.render('home.ejs',{
            posts_l:posts_list,
            title:"home"
        });
    })    
}



