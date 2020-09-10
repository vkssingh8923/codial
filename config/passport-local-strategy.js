const passport = require('passport');
const User = require('../models/users');
const LocalStrategy =require('passport-local').Strategy



// passport.use(new LocalStrategy({usernameField:'email'},
//     function(email, password, done) {
//       userSchemaModel.findOne({ email: email }, function (err, user) {
//         if (err) {
//             console.log("eror occured")
//             return done(err); }
//         if (!user) { return done(null, false); }
//         if (user.password!=password) { return done(null, false); }
//         return done(null, user);
//       });
//     }
//   ));

// passport.serializeUser((user,done)=>{
//     done(null,user.id)
// })

// passport.deserializeUser((id,done)=>{
//     userSchemaModel.findById(id,function(err,user){
//         if(err){
//             console.log("erro"+error);
//             return done(err)
//         }
//         return done(null,user)
//     })
// })

// module.exports=passport;

passport.use(new LocalStrategy({
    usernameField: 'email'
},
function(email, password, done){
    // find a user and establish the identity
    User.findOne({email: email}, function(err, user)  {
        if (err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        if (!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null, false);
        }

        return done(null, user);
    });
}


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
User.findById(id, function(err, user){
    if(err){
        console.log('Error in finding user --> Passport');
        return done(err);
    }

    return done(null, user);
});
});

passport.checkAuthUser=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/log/login')
    
}

passport.setUserViews=function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user =req.user;
    }
    next()
}

module.exports = passport;