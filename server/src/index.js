const express = require("express");
const cors = require("cors");

const connect = require("./configs/db");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());

let port = process.env.PORT || 2344;
// added cors
const { register, login } = require("./controllers/userController");

const teacherController = require("./controllers/TeacherController");

const classController = require("./controllers/ClassController");

app.use(cors());

app.use("/teacher", teacherController);
app.use("/class", classController);

app.post("/register", register);
app.post("/login", login);

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2344");
});
