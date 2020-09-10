
const cookieParser = require("cookie-parser");
const userSchemaModel = require("../models/users");

module.exports.profile = function (req, res){
    if(req.cookies.user_id){
        console.log(req.cookies)
        userSchemaModel.findById(req.cookies.user_id,(err,user)=>{
            if (err){console.log("error");return;}
            return res.render('profile.ejs',{
                title:"profile",
                User:user
            })
        })
    }
    else {
        return res.redirect('back');
    }
}