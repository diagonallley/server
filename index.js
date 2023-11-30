const express = require("express"); // Common JS modules
const mongoose = require("mongoose")
const req = require("express/lib/request");
const keys = require("./config/keys")
const cookieSession = require("cookie-session");
const passport = require("passport")
// import express from 'express'; ES 2015
require("./models/User")
require("./services/passport")
const URI = keys.mongoURI;
mongoose.connect(URI)


const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth_routes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT);

// 111722350900112755273



