const express = require('express')
const app = express()
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database:'testdb'
})

connection.connect((err) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log("Database connected")

  const creationQuery = `create table School(
  StudentID INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(20)
  )`

  connection.execute(creationQuery, (err) => {
    if (err) {
      console.log(err)
      connection.end()
      return
    }
    console.log("Table created")
  })
})

app.get("/",(req, res) => {
  res.send("Server is running")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})