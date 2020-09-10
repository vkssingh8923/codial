var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var postsSchema = new Schema({
    contents: { 
        type:String, 
        required: true,
        
    },
    user: { 
        type:mongoose.Schema.Types.ObjectId,
        ref:'userSchemaModel'
     }
    },{
        timestamps:true
  });

 var postSchemaModel = mongoose.model('postSchemaModel',postsSchema );

 module.exports = postSchemaModel;