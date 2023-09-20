const mongoose = require('mongoose');
const express = require("express")
const app = express()
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();
const port = process.env.PORT 
const url = process.env.DatabaseURL



// app.use("/",(req,res)=>{
//     res.send("hello")
// })

app.use("/auth",authRoutes);



  mongoose.connect(url)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
