const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const connectToMongoDB = require("./connection/db");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");
const bookRouter = require("./routes/books");
dotenv.config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
//routes

app.use("/auth", authRouter);
app.use("/books", bookRouter);
// app.use('/users', userRouter);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
