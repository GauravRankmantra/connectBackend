const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./src/db/index.js");
const errorHandler = require("./src/middlewares/errorHandler.middleware.js");

const app = express();

connectDB();

const allowedDomains = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://connectwithus2.netlify.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin, like mobile apps or curl requests
      if (!origin || allowedDomains.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, PATCH",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Credentials",
    ],

    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./src/routes/index.js");
app.use("/api", apiRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
