const dotenv = require('dotenv');
const path = require('path')
dotenv.config({path: path.join(__dirname, '.env')});
const mongoose = require('mongoose');
const app = require('./app')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
