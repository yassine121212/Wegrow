require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const authRoutes = require("./routes/auth");
const multer = require("multer");
const path = require("path");
// database connection
connection();

app.use("/images",express.static(path.join(__dirname,"public/images")));
// middlewares
app.use(express.json());
app.use(cors())
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});
const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
return res.status(200).json("File uploaded successfully.");
    }catch(err){
console.log(err)
    }
});
// routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
 app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));