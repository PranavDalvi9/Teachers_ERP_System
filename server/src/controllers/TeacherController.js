const express = require("express")
const Teacher = require("../models/TeacherModel");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const user = await Teacher.create(req.body)
        return res.send(user)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})


router.get("", async (req, res) => {
    try {

      const page = req.query.page || 1;
      const size = req.query.size || 4;
    

      if (req.query.name) {
        const user = await Teacher.find({name: req.query.name}).populate({path: "classes", select:["class1"]}).skip((page-1)*size).limit(size).lean().exec();
      console.log(user)
       return res.send(user)
      } else {
        const user = await Teacher.find().populate({path: "classes", select:["class1"]}).skip((page-1)*size).limit(size).lean().exec();
        console.log(user)
        return res.send(user)
      }

      
    } catch (error) {``
      return res.send(error);
    }
  });

module.exports= router