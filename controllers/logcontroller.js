const user =require('../models/users');
const { findOne } = require('../models/users');
const userSchemaModel = require('../models/users');

module.exports.login = function (req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile')
    }
    return res.render('login.ejs',{title:"login"});
}
module.exports.signup = function (req, res){
    return res.render('signup.ejs',{title:"signup"});
}
module.exports.create = function (req, res){
    console.log("created");
    console.log(req.body);
    if (req.body.password!=req.body.cpassword){
    return res.redirect('back')
    }
    userSchemaModel.findOne({'email':req.body.email},(err,user)=>{
        if(err){console.log("passwords dont match");return;}
        if(!user){
            userSchemaModel.create(req.body,(err,user)=>{
                if(err){console.log("error in creating user");return;}
                return res.redirect ('/log/login')
            })
        }else{return res.redirect('/log/login')}
    })

}
module.exports.create_session = function (req, res){
    // return res.render('signup.ejs',{title:"signup"});

    return res.redirect('/');
}
