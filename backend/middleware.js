const express = require("express");
const app = express();
const router = express.Router();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

//* built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//! application-level middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} ---Request [${req.method}] [${req.url}]`);
};
app.use(loggerMiddleware);

//! router-level middleware
const getUsers = (req, res) => {
  res.json({ message: "Successfully get all Users" });
};

const createUser = (req, res) => {
  res.json({ message: "Successfully create new User" });
};

// Mount the router middleware on "/api/users"
app.use("/api/users", router);

// Define routes on the router
router.route("/").get(getUsers).post(createUser);

//! custom middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.path}`);
//   next();
// });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Home Page" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
