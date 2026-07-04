const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student");

router.post("/", studentController.addStudent);
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudentById);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;

// const express = require('express')
// const router = express.Router()
// const studentController = require("../controllers/student")

// router.get("/", studentController.studentCheck)
// router.post("/add", studentController.addStudent)
// router.put("/update/:id", studentController.updateStudent)
// router.delete("/delete/:id",studentController.deleteStudent)

// module.exports = router
