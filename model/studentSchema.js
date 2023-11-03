const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    "name": {type:String},
    "email":{type:String},
    "rollNo": {type:Number}
},{
    collection: "STUDENT"
})

module.exports = mongoose.model("studentSchema",studentSchema);

