var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var commmentSchema = new Schema({
    contents: { 
        type:String, 
        required: true,
        
    },
    user: { 
        type:mongoose.Schema.Types.ObjectId,
        ref:'userSchemaModel'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'postSchemaModel'
    }
    },{
        timestamps:true
  });

 var commentSchemaModel = mongoose.model('commentSchemaModel',commmentSchema );

 module.exports = commentSchemaModel;