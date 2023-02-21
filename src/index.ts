import startServer from "./server/startServer";
import dbConnection from "./database/dbConnection";
import connection from "./database/config.db";
import environment from "./loadEnvironment";
import chalk from "chalk";

(async () => {
  try {
    await startServer(environment.port);
    dbConnection(connection);
    console.log(
      chalk.bgGreen("Starting server and connecting to the database")
    );
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    console.log(chalk.red("Error while starting the server and the database"));
    process.exit(5);
  }
})();
