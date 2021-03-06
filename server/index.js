require("dotenv").config();
const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: './uploads' })
const path = require('path');
const cors = require("cors");
const fs = require("fs");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
 const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const avisRoutes = require("./routes/avi");

// database connection
connection();



// middlewares
app.use(express.json());
app.use(cors())
app.use('/images', express.static(path.join(__dirname, 'images')));
// routes
app.use("/api/users", userRoutes);
 app.use("/api/auth", authRoutes);
 app.use("/api/avis", avisRoutes);
 app.use("/api/conversations", conversationRoute);
 app.use("/static",express.static("./uploads"));
 app.use("/api/messages", messageRoute);
const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));