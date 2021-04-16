const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config()
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// setup mongodb 
// this require statement is like copying and pasting the code from the file right here!
require('./config/mongoose.config');

// set up routes
require('./routes/user.routes')(app);
require('./routes/opinion.routes')(app);

app.listen(port, () => console.log("Listening on port: " + port));
