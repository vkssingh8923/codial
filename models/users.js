var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    email: { 
        type:String, 
        required: true,
        unique: true
    },
    password: { 
        type:String,
        required:true
     },
     name: { 
         type:String,
         required:true
      }
    },{
        timestamps:true
  });

 var userSchemaModel = mongoose.model('userSchemaModel',userSchema );

 module.exports = userSchemaModel;