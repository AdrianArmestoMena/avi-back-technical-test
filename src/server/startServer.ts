import "../loadEnvironment";
import app from ".";
import chalk from "chalk";

const startServer = async (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      console.log(chalk.green("Server listening"));
      resolve(true);
    });

    server.on("error", (error) => {
      console.log(
        chalk.yellow(`Error connecting to database ${error.message}`)
      );
      reject(error);
    });
  });

export default startServer;
