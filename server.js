const express = require('express')
const app = express();
const db = require("./utils/db")
const studentRoute = require("./routes/student")
app.use(express.json())

app.get("/", (req, res) => {
  res.send(
    "Server is running"
  )
})

app.use("/student", studentRoute)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

