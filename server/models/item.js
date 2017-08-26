console.log('Item Model');
var mongoose = require('mongoose')
var Schema = mongoose.Schema


ItemSchema = new mongoose.Schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  createdBy_name: {type: String},
  createdBy_id: {type: String},
  _status: {type: Boolean, default: false}
},
{
  timestamps:true
}),
Item = mongoose.model('Item', ItemSchema);


