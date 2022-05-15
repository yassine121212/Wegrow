require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
// database connection
connection();

app.use("/images",express.static(path.join(__dirname,"public/images")));
// middlewares
app.use(express.json());
app.use(cors())
// routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
 app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));