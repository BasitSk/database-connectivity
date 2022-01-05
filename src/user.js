console.log("Hello World");
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "react",
};

async function connectionCheck() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Success..!!");
  await connection.endAsync();
}

async function addUser(user) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Success..!!");

  let sql = `insert into Mydbtable1 (username, password) values (?,?)`;
  await connection.queryAsync(sql, [user.username, user.password]);
  await connection.endAsync();
  console.log("Record Added..!!");
}

async function selectUser() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Success..!!");

  let sql = `select * from Mydbtable1`;
  const list = await connection.queryAsync(sql);
  await connection.endAsync();
  // console.log(list);
  return list;
}

//connectionCheck();
//const user = { username: "Monty", password: "4791" };
//addUser(user);
//selectUser();

module.exports = { selectUser };
