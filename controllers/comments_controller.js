const post =require('../models/posts')
const create_comment=require('../models/comments')
module.exports.create_comment = function (req, res){
    // return res.render('profile.ejs',{title:"pro"});
    post.findById(req.body.post,(err,post)=>{
        if(post){
            create_comment.create({
                contents:req.body.comment_content,
                user:req.user._id,
                post:req.body.post
            },(err,comment)=>{
                if (err){return}
                console.log(comment)
                post.comments.push(comment)
                post.save()
                return res.redirect('back');
            })
        }
    })
    
}