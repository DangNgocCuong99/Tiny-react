const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    content:String,
    img:Array
})
const itemModel = mongoose.model('/tiny',itemSchema)
module.exports = itemModel