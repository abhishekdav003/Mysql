const Student = require("../models/students");

// Insert
const addStudent = async (req, res) => {
  try {
    const { name, email } = req.body;

    const student = await Student.create({
      name,
      email,
    });

    res.status(201).json({
      message: "Student added successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Read All
const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Read By ID
const getStudentById = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    student.name = req.body.name;
    student.email = req.body.email;

    await student.save();

    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    await student.destroy();

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};

// const db = require("../utils/db")

// const studentCheck = (req, res) => {
//   res.send("Student is access")
// }

// const addStudent = (req, res) => {
//   const { name, email } = req.body
//   const insertQuery = `insert into students (name, email) value ( ?, ?)`

//   db.execute(insertQuery, [name, email], (err) => {
//     if (err) {
//       console.log(err.message)
//       res.status(500).send(err.message)
//       db.end()
//       return
//     }
//     console.log("student has been inserted")
//     res.status(200).send(`Student with name ${name} has been sucessfully added`)
//   })
// }

// const updateStudent = (req, res) => {
//   const { id } = req.params
//   const { name } = req.body
//   const updateQuery = `update students set name = ? where id = ?`

//   db.execute(updateQuery, [name, id], (err, result) => {
//     if (err) {
//       console.log(err.message)
//       res.status(500).send(err.message)
//       db.end()
//       return
//     }
//     if (result.affectedRows === 0) {
//       res.status(404).send("Student not found")
//     }
//     res.status(200).send("User has been updated")
//   })
// }

// const deleteStudent = (req, res) => {
//   const { id } = req.params
//   const deleteQuery = `delete from students where id = ?`
//   db.execute(deleteQuery, [id], (err, result) => {
//     if (err) {
//       res.status(500).send("something went wrong")
//       return
//     }
//     if (result.affectedRows === 0) {
//       res.status(404).send("Student not found")
//     }
//     res.status(200).send("Student has been deleted")
//   })

// }

// module.exports = {
//   studentCheck,
//   addStudent,
//   updateStudent,
//   deleteStudent
// }
