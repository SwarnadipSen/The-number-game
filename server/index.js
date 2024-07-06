const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { addscore } = require("./routes/addscore");



const app = express();


const corsOptions = {
    origin: "http://localhost:3000", // Allow requests from the React frontend
    credentials: true,
  };
  
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use('/api', addscore);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
