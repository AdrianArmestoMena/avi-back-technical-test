import chalk from "chalk";
import type mysql from "mysql";

const dbConnection = (connection: mysql.Connection): void => {
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack ?? "no"}`);
      return;
    }

    console.log(chalk.green(`Connected as id ${connection.threadId ?? "no"}`));
  });
};

export default dbConnection;
