const express = require('express');
const mongoose = require('mongoose');
const app =express();

//!connect to mongodb
mongoose.connect().then(() => console.log('DB connected successfully')).catch((err) => console.log('DB connection error:', err));


//start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

