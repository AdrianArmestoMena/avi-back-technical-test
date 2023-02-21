import dotenv from "dotenv";

dotenv.config();

const {
  PORT: port,
  HOST: host,
  DBUSER: user,
  PASSWORD: password,
  DB: database,
} = process.env;

type Environment = {
  port: number;
  host: string;
  user: string;
  password: string;
  database: string;
};

const environment: Environment = {
  port: Number(port),
  host: host!,
  user: user!,
  password: password!,
  database: database!,
};

export default environment;
