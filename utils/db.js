const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

module.exports = sequelize;













// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database:'testdb'
// })

// connection.connect((err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log("Db  connected")

//   const studentQuery = `create table if not exists Students(
//   id int auto_increment primary key,
//   name varchar(50),
//   email varchar(50)
//   )`

//   connection.execute(studentQuery, (err) => {
//     if (err) {
//       console.log(err)
//       connection.end()
//       return
//     }
//     console.log("Student Table created.")
//   })
// })

// module.exports = connection
