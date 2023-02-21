import mysql from "mysql";
import environment from "../loadEnvironment";

const connection: mysql.Connection = mysql.createConnection({
  host: environment.host,
  user: environment.user,
  password: environment.password,
  database: environment.database,
});

export default connection;
