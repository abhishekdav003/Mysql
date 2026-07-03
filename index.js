const express = require('express')
const app = express()
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "busbooking",
});

connection.connect((err) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log("Database connected")

  const creationQuery = `create table if not exists School(
  StudentID INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(20)
  )`;

  const userQuery = `create table if not exists Users(
  id int auto_increment primary key,
  name varchar(255),
  email varchar(255)
  )`

  const busQuery = `create table if not exists Buses(
  id int auto_increment primary key,
  busNumber varchar(50),
  totalSeats int,
  availableSeats int
  )`

  const bookingQuery = `create table if not exists Booking(
  id int auto_increment primary key,
  seatNumber int
  )`

  const paymentQuery = `create table if not exists Payments(
  id int auto_increment primary key,
  amountPaid decimal(10,2),
  paymentStatus varchar(50)
  )`

  connection.execute(paymentQuery, (err) => {
    if (err) {
      console.log(err)
      connection.end()
      return
    }
    console.log(
      "payment table created"
    )
  })

  connection.execute(bookingQuery, (err) => {
    if (err) {
      console.log(err)
      connection.end()
      return
    }
    console.log("Booking table created")
  })

  connection.execute(busQuery, (err) => {
    if (err) {
      console.log(err)
      connection.end()
      return
    }
    console.log("Bus Table created")
  })

  connection.execute(userQuery, (err) => {
    if (err) {
      console.log(err)
      connection.end()
      return
    }
    console.log("User Table created")
  })

  

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