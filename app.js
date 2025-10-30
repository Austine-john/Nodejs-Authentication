const express = require('express');
const mongoose = require('mongoose');
const app =express();
const router = express.Router();

//!connect to mongodb
mongoose
.connect('mongodb://127.0.0.1:27017/auth-api')
.then(() => console.log('DB connected successfully'))
.catch((err) => console.log('DB connection error:', err));

//!middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//!Routes
app.use('/',router)

//start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

