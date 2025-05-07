import mysql, { Connection, MysqlError } from "mysql";

const config = require("../config");
const connection: Connection = mysql.createConnection(config);

connection.connect((error: MysqlError | null) => {
  if (error) {
    throw new Error("mySql failed connection");
  }

  console.log("connected to SQL server");
});

function runSQL(sqlCommand: string) {
  return new Promise((resolve, reject) => {
    connection.query(
      sqlCommand,
      function (error: MysqlError | null, results: any) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}

module.exports = {
  runSQL,
};
