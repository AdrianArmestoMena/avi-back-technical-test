type IcorsOptions = {
  origin: string[];
};

const corsOptions: IcorsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://aviprod.netlify.app",
  ],
};

export default corsOptions;
