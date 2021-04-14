const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// setup mongodb 
// this require statement is like copying and pasting the code from the file right here!
require('./config/mongoose.config');

// set up routes
require('./routes/user.routes')(app);

app.listen(port, () => console.log("Listening on port: " + port));
