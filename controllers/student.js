const db = require("../utils/db")

const studentCheck = (req, res) => {
  res.send("Student is access")
}

const addStudent = (req, res) => {
  const { name, email } = req.body
  const insertQuery = `insert into students (name, email) value ( ?, ?)`

  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message)
      res.status(500).send(err.message)
      db.end()
      return
    }
    console.log("student has been inserted")
    res.status(200).send(`Student with name ${name} has been sucessfully added`)
  })
}

const updateStudent = (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const updateQuery = `update students set name = ? where id = ?`

  db.execute(updateQuery, [name, id], (err, result) => {
    if (err) {
      console.log(err.message)
      res.status(500).send(err.message)
      db.end()
      return
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found")
    }
    res.status(200).send("User has been updated")
  })
}

const deleteStudent = (req, res) => {
  const { id } = req.params
  const deleteQuery = `delete from students where id = ?`
  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      res.status(500).send("something went wrong")
      return
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found")
    }
    res.status(200).send("Student has been deleted")
  })
  
}


module.exports = {
  studentCheck,
  addStudent,
  updateStudent,
  deleteStudent
}
