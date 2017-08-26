// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var ObjectID = require('mongodb').ObjectID;


// var UserSchema = new mongoose.Schema({
//   name: String,
//   created_at: {type: Date, default: Date.now }
  
// });
// mongoose.model('User', UserSchema);


console.log('User Model');
var mongoose = require('mongoose')
var Schema = mongoose.Schema


UserSchema = new mongoose.Schema({
  name: {type:String, required:true},
  bucketlist: [{type: Schema.Types.ObjectId, ref: 'Item'}]
},
{
  timestamps:true
}),
User = mongoose.model('User', UserSchema);
