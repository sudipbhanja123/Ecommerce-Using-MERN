const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

console.log(process.env.DB_URL);

// Middleware
app.use(express.json({ limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Routes
const authRoutes = require("./src/users/user.route");
app.use("/api/auth", authRoutes);

// DB Connection
async function main() {
  await mongoose.connect("mongodb://localhost:27017/sudip-ecommerce");
}
main()
  .then(() => console.log("Mongodb is successfully connected"))
  .catch((err) => console.log(err));

// Default route
app.get("/", (req, res) => {
  res.send("Hello World! lll");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
