const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    class1: {type: String, require: true}
},
{
    versionKey: false,
    timestamps: true,
})

const ClassSchema = mongoose.model("class",classSchema );
module.exports = ClassSchema;

