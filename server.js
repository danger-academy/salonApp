const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");
const routes = require("./routes/index.js");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/salonapp";
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require the session for saving user data and giving a user a unique experience.
// const session = require('express-session');

//Use cors for enable cross origin requests
// const cors = require('cors');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//For storing cookies for the user.
// app.use(session({
//     //Create a secret for the cookie store it in .env file
//     //Secret can be anything.
//     secret: process.env.SESSION_SECRET,
//     //this for resaving the cookie false, if true can cause a memory leak.
//     resave: false,
//     //saveUnitialized best false, unless connect to a database.
//     saveUninitialized: false,
//     cookie: {
//     //The max age of the cookie
//     maxAge: 1000 * 60 * 60 * 24 * 14
//     }
// }));

// Define API routes here
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//Allow cross origin requests.
// app.use(cors());

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
