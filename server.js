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
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Define API routes here
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(routes);

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
