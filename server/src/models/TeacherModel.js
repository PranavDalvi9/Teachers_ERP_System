const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
    name: {type: String, require: true},
    gender:{type: String, require: true},
    age:{type: String, require: true},
    classes : [{type: mongoose.Schema.Types.ObjectId, ref: "class", required: true}]

},
{
    versionKey: false,
    timestamps: true,
})

const Teacher = mongoose.model("teacher",teacherSchema );
module.exports = Teacher;


// name: "prana",
//     gender:"aa",
//     age:"aaa",
// class: [
//     {
//         class:,
//         div:
//     },
//     {
//         class:,
//         div:
//     }
// ]